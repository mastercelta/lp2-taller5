from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from app.models.posts import Post
from app.schemas.posts import PostCreate, PostUpdate, PostResponse
from app.deps import get_db, get_current_user
from app.models.users import User

router = APIRouter(prefix="/posts", tags=["posts"])


@router.get("/", response_model=list[PostResponse] | PostResponse)
def get_posts(
    comment_id: int = Query(None),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    if comment_id:
        comment = db.query(Post).get(comment_id)
        if not comment:
            raise HTTPException(status_code=404, detail="Comentario no encontrado")
        return comment
    return db.query(Post).all()


@router.post("/", response_model=PostResponse)
def create_post(
    post: PostCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    new_post = Post(
        titulo=post.titulo,
        contenido=post.contenido,
        url_imagen=post.url_imagen,
        id_usuario=current_user.id,
    )
    db.add(new_post)
    db.commit()
    db.refresh(new_post)
    return new_post


@router.put("/{post_id}", response_model=PostResponse)
def update_post(
    post_id: int,
    post: PostUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    db_post = db.query(Post).get(post_id)
    if not db_post:
        raise HTTPException(status_code=404, detail="Publicación no encontrada")

    if db_post.id_usuario != current_user.id:
        raise HTTPException(status_code=403, detail="No puedes editar esta publicación")

    for key, value in post.dict(exclude_unset=True).items():
        setattr(db_post, key, value)

    db.commit()
    db.refresh(db_post)
    return db_post


@router.delete("/{post_id}")
def delete_post(
    post_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    db_post = db.query(Post).get(post_id)
    if not db_post:
        raise HTTPException(status_code=404, detail="Publicación no encontrada")

    if db_post.id_usuario != current_user.id:
        raise HTTPException(
            status_code=403, detail="No puedes eliminar esta publicación"
        )

    db.delete(db_post)
    db.commit()
    return {"message": "Publicación eliminada"}
