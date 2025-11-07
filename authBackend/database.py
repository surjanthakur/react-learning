from sqlmodel import Session, SQLModel, create_engine
from fastapi import HTTPException, status
from dotenv import load_dotenv
import os

load_dotenv()

database_url = os.getenv("db_url")


if database_url:
    engine = create_engine(database_url)

else:
    raise HTTPException(
        status_code=status.HTTP_400_BAD_REQUEST, detail="cannot find database url ❌"
    )


def create_db():
    SQLModel.metadata.create_all(engine)
    print("databse is connected ✅📂")


def get_session_db():
    with Session(engine) as session:
        yield session
