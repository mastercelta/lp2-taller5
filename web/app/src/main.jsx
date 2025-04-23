import {createRoot} from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router";
import "./screens/styles/login.css";
import "./screens/styles/postStyles.css";

import PrivateRoute from "./components/PrivateRoute.jsx";
import {AuthProvider} from "./components/AuthContext.jsx";

import Blogs from "./screens/Blogs.jsx";
import Login from "./screens/Login.jsx";
import ReadPost from "./screens/ReadPost.jsx";
import Register from "./screens/Register.jsx";
import UserProfile from "./screens/UserProfile.jsx";
import CreatePost from "./screens/CreatePost.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="blog/page/:page" element={<Blogs />} />
        <Route path="read_post/:id" element={<ReadPost />} />
        <Route
          path="profile"
          element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          }
        />
        <Route
          path="new_post"
          element={
            <PrivateRoute>
              <CreatePost />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<PrivateRoute></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>,
);
