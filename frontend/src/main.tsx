import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./component/About/About.tsx";
import Github from "./component/redirectGithub.tsx";
import Blog from "./component/Blogs/Blog.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/github" element={<Github />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  </BrowserRouter>
);
