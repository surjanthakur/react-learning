import Container from "../container/container";
import PostForm from "../components/post-form/postForm";

export default function AddPost() {
  return (
    <div className="py-8">
      <Container>
        <PostForm />
      </Container>
    </div>
  );
}
