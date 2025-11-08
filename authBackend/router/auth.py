from fastapi import APIRouter, Depends, status, HTTPException
from sqlmodel import Session
from dbModels import User
from database import get_session_db
from pwdlib import PasswordHash
from pydantic_schema import showSignup, showLogin, Token
from uuid import uuid4
from .authFunction import create_access_token
from datetime import timedelta

router = APIRouter(tags=["authentication"])

password_hash = PasswordHash.recommended()

ACCESS_TOKEN_EXPIRE_MINUTES = 15


# hash plain password
def hashPassword(password):
    return password_hash.hash(password)


def verify_password(plain_password, hashed_password):
    return password_hash.verify(plain_password, hashed_password)


# signup user
@router.post("/signup")
def signup_user(signupform: showSignup, session_db: Session = Depends(get_session_db)):
    user = session_db.query(User).filter(User.email == signupform.email).first()  # type: ignore
    if user is not None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="user is already exist please try again ❌",
        )
    new_user = User(
        id=str(uuid4()),
        username=signupform.username,
        email=signupform.email,
        password=hashPassword(signupform.password),
    )
    session_db.add(new_user)
    session_db.commit()
    session_db.refresh(new_user)
    return {"message": "signup user successfully"}


# login user
@router.post("/login")
def login_user(loginform: showLogin, session_db: Session = Depends(get_session_db)):
    user = session_db.query(User).filter(User.email == loginform.email).first()  # type: ignore
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password ❌",
            headers={"WWW-Authenticate": "Bearer"},
        )
    if not verify_password(loginform.password, user.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect password please try again ❌",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.email}, expires_delta=access_token_expires
    )
    return Token(access_token=access_token, token_type="bearer")
