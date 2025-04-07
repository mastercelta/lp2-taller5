import {createRoot} from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router";
import "./styles.css";
import "./screens/styles/login.css";
import Blogs from "./screens/Blogs.jsx";
import Login from "./screens/Login.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="blog" element={<Blogs />} />
    </Routes>
  </BrowserRouter>,
);
