from fastapi import APIRouter, status, HTTPException
from dbModels import User
from database import get_session_db
from pwdlib import PasswordHash

router = APIRouter(tags=["authentication"])

password_hash = PasswordHash.recommended()


@router.post("/signup")
def signup_user():
    pass


@router.post("/login")
def login_user():
    pass
