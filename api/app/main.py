from fastapi import FastAPI
import uvicorn
from app.routers import users
from app.routers import auth

app = FastAPI()

app.include_router(users.router)
app.include_router(auth.router)

@app.get("/")
def root():
    return {"message": "API FastAPI corriendo directamente con uvicorn.run() 🚀"}


if __name__ == "__main__":
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
