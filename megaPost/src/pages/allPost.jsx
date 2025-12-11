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
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {allPost.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard $id={post.$id} image={post.image} title={post.title} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
