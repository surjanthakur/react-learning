from fastapi import APIRouter, Depends, HTTPException, status
from sqlmodel import Session
from database import get_session_db
from dbModels import Tweet
from authFunction import get_current_user

router = APIRouter(tags=["tweets"])


@router.get("/tweet")
def get_all_tweets(
    sesssion_db: Session = Depends(get_session_db),
    curr_user: Session = Depends(get_current_user),
):
    all_tweets = sesssion_db.query(Tweet).all()
    if all_tweets is not None:
        return all_tweets
    else:
        raise HTTPException(
            status_code=status.HTTP_204_NO_CONTENT, detail="tweets not found"
        )
