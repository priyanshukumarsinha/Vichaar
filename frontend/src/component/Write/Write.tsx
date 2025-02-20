import { useNavigate } from "react-router-dom";
import { useIsAuthStore } from "../../store/isAuthState";
import BlogNavbar from "../Blogs/Navbar/BlogNavbar";
import Editor from "./Editor";
import { useEffect } from "react";

const Write = () => {
  const isAuthenticated = useIsAuthStore((state) => state.isAuth);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, []);

  return (
    <div className="" >
      {isAuthenticated ? (
        <div>
          <BlogNavbar />
          <Editor />
        </div>
      ) : null}
    </div>
  );
};

export default Write;
