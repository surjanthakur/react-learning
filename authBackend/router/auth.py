from fastapi import APIRouter
from dbModels import User
from database import get_session_db

router = APIRouter(tags=["authentication"])


@router.post("/signup")
def signup_user():
    pass


@router.post("/login")
def login_user():
    pass
