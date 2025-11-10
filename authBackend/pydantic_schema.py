from string import whitespace
from pydantic import BaseModel, EmailStr, Field


class showSignup(BaseModel):
    username: str = Field(min_length=3, max_length=30)
    email: EmailStr
    password: str


class showLogin(BaseModel):
    email: EmailStr
    password: str


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: str | None = None
