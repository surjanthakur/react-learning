from sqlmodel import Field, SQLModel


class User(SQLModel, table=True):
    id: str = Field(primary_key=True, default=None)
    username: str
    email: str
    password: str


class Tweet(SQLModel, table=True):
    id: str = Field(primary_key=True, default=None)
    owner: str
    tweet: str = Field(min_length=5, max_digits=200)
