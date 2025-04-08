import {createRoot} from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router";
import "./screens/styles/styles.css";
import "./screens/styles/login.css";
import "./screens/styles/postStyles.css";
import './screens/styles/Register.css'

import Blogs from "./screens/Blogs.jsx";
import Login from "./screens/Login.jsx";
import ReadPost from "./screens/ReadPost.jsx";
import Register from "./screens/Register.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="blog" element={<Blogs />} />
      <Route path="read_post" element={<ReadPost />} />
      <Route path="register" element={<Register />} />
    </Routes>
  </BrowserRouter>,
);
