from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from app.schemas.login import LoginRequest, LoginResponse
from app.models.users import User
from app.deps import get_db
from app.utils.auth import verify_password, create_access_token

router = APIRouter(tags=["auth"])


@router.post("/login", response_model=LoginResponse)
def login(request: LoginRequest, db: Session = Depends(get_db)):
    user = (
        db.query(User)
        .filter(User.email == request.email, User.password == request.password)
        .first()
    )

    if not user:  # or not verify_password(request.password, user.password):
        raise HTTPException(status_code=401, detail="Credenciales inválidas")

    token = create_access_token(data={"sub": str(user.id)})
    return LoginResponse(user=user, access_token=token, token_type="bearer")
