from fastapi import APIRouter, Depends, status, HTTPException
from sqlmodel import Session
from dbModels import User
from database import get_session_db
from pwdlib import PasswordHash
from pydantic_schema import showSignup

router = APIRouter(tags=["authentication"])

password_hash = PasswordHash.recommended()


# signup user
@router.post("/signup")
def signup_user(signupform: showSignup, session_db: Session = Depends(get_session_db)):
    pass


# login user
@router.post("/login")
def login_user():
    pass
