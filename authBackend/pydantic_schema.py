from pydantic import BaseModel


class showSignup(BaseModel):
    username: str
    email: str
    password: str
