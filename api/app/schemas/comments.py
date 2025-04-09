from pydantic import BaseModel, ConfigDict
from datetime import datetime


class CommentBase(BaseModel):
    comentario: str


class CommentCreate(CommentBase):
    id_publicacion: int


class CommentUpdate(BaseModel):
    comentario: str | None = None


class CommentResponse(CommentBase):
    id: int
    id_usuario: int
    id_publicacion: int
    fecha_creacion: datetime
    model_config = ConfigDict(from_attributes=True)
