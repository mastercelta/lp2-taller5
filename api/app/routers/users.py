from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.models.users import User
from app.schemas.users import UserResponse
from app.deps import get_db

router = APIRouter(
    prefix="/users",
    tags=["users"]
)

@router.get("/", response_model=list[UserResponse])
def get_usuarios(db: Session = Depends(get_db)):
    return db.query(User).all()