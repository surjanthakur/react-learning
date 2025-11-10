from datetime import datetime, timedelta, timezone
from typing import Annotated
from dbModels import User
from sqlmodel import Session
from database import get_session_db
from jose import jwt, JWTError, ExpiredSignatureError
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from pydantic_schema import TokenData


SECRET_KEY = "09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")


# create access token
def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.now(timezone.utc) + expires_delta
    else:
        expire = datetime.now(timezone.utc) + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


# authorization user with access token
def get_current_user(
    token: Annotated[str, Depends(oauth2_scheme)],
    session_db: Session = Depends(get_session_db),
):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email = payload.get("sub")
        if email is None:
            raise credentials_exception
        token_data = TokenData(email=email)
        user = session_db.query(User).filter(User.email == token_data.email).first()  # type: ignore
        if not user:
            raise HTTPException(status_code=401, detail="User not found ❌")
        return user
    except ExpiredSignatureError:
        raise HTTPException(
            status_code=401, detail="Token expired, please login again ❌"
        )
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid token ❌")
