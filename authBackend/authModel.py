from sqlmodel import Field, SQLModel


class User(SQLModel, table=True):
    id: str = Field(primary_key=True, default=None)
    username: str
    email: str
    password: str
