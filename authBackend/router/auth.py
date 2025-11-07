from fastapi import APIRouter, status, HTTPException
from dbModels import User
from database import get_session_db
from pwdlib import PasswordHash

router = APIRouter(tags=["authentication"])

password_hash = PasswordHash.recommended()


# signup user
@router.post("/signup")
def signup_user():
    pass


# login user
@router.post("/login")
def login_user():
    pass
