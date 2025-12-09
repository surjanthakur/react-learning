import PostCard from "../components/postCard";
import Container from "../container/container";
import services from "../appwrite/config";
import { useState, useEffect } from "react";

export default function AllPost() {
  const [allPost, setAllPost] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      await services.getAllPosts([]).then((posts) => {
        if (posts) {
          setAllPost(posts.documents);
        }
      });
    };
    fetchPost();
  });
  return <div></div>;
}
