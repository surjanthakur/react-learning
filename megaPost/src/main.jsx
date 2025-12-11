import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import Store from "./store/ReduxStore.js";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/home.jsx";
import AuthLayout from "./components/authLayout.jsx";
import Login from "./components/login.jsx";
import Signup from "./components/signup.jsx";
import AllPosts from "./pages/allPost.jsx";
import AddPost from "./pages/addPost.jsx";
import EditPost from "./pages/editPost.jsx";
import Post from "./pages/post.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* home comp */}
      <Route path="" element={<Home />} />
      {/* login */}
      <Route
        path="login"
        element={
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        }
      />
      {/* signup */}
      <Route
        path="signup"
        element={
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        }
      />
      {/* all posts */}
      <Route path="all-posts" element={<AllPosts />} />
      {/* add-posts */}
      <Route path="add-post" element={<AddPost />} />
      {/* edit posts */}
      <Route path="edit-post/:slug" element={<EditPost />} />
      {/* get post by id */}
      <Route path="post/:slug" element={<Post />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
