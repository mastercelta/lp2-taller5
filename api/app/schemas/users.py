from pydantic import BaseModel
from datetime import datetime

class UserBase(BaseModel):
    usuario: str
    nombre: str
    email: str
    fecha_creacion: datetime

class UserResponse(UserBase):
    id: int

    class Config:
        orm_mode = True