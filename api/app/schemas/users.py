from pydantic import BaseModel, ConfigDict
from datetime import datetime

class UserBase(BaseModel):
    usuario: str
    nombre: str
    email: str
    fecha_creacion: datetime

class UserResponse(UserBase):
    id: int

    model_config = ConfigDict(from_attributes=True)