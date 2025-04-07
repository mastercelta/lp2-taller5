from fastapi import FastAPI
import uvicorn
from app.routers import users
from app.routers import auth
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(users.router)
app.include_router(auth.router)

@app.get("/")
def root():
    return {"message": "API FastAPI corriendo directamente con uvicorn.run() 🚀"}


if __name__ == "__main__":
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
