import { useNavigate, useParams } from "react-router-dom";
import services from "../appwrite/config";
import PostForm from "../components/post-form/postForm";
import Container from "../container/container";
import { useEffect, useState } from "react";

export default function EditPost() {
  const navigate = useNavigate();
  const [post, setPost] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      services.getpost(slug).then((post) => {
        if (post) setPost(post);
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post}></PostForm>
      </Container>
    </div>
  ) : null;
}
