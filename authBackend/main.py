from fastapi import FastAPI
from contextlib import asynccontextmanager
from database import create_db
from router import listings, auth


# connnect to databse when app started
@asynccontextmanager
async def create_session_db(app: FastAPI):
    create_db()
    yield None


app = FastAPI(lifespan=create_session_db)

app.include_router(router=listings.router)
app.include_router(router=auth.router)
