from pydantic import BaseModel
from app.schemas.users import UserResponse


class LoginRequest(BaseModel):
    email: str
    password: str


class LoginResponse(BaseModel):

    user: UserResponse
    access_token: str
    token_type: str = "bearer"
