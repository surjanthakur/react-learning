import { useCallback } from "react";
import { useForm } from "react-hook-form";
import Button from "../button";
import Input from "../input";
import Select from "../select";
import RTE from "../RTE";
import services from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
  const { handleSubmit, register, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.satus || "active",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    if (post) {
      const file = data.image[0] ? services.uploadFile(data.image[0]) : null;

      if (file) {
        services.deleteFile(post.image);
      }
      const dbPost = await services.updatePost(post.$id, {
        ...data,
        image: file ? file.$id : undefined,
      });
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = data.image[0] ? services.uploadFile(data.image[0]) : null;
      if (file) {
        const id = file.$id;
        data.image = id;
        const newPost = await services.createPost({
          ...data,
          userId: userData.$id,
        });
        if (newPost) {
          navigate(`/post/${newPost.$id}`);
        }
      }
    }
  };
  return (
    <div>
      <h1></h1>
    </div>
  );
}
