import Footer from "../Home/Footer/Footer";
import BlogSection from "./BlogSection/BlogSection";
import BlogNavbar from "./Navbar/BlogNavbar";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();



  return (
    <section className="flex justify-between items-center min-h-screen flex-col">
      <BlogNavbar />
      <BlogSection id = {id} />
      <Footer className="border-gray-300" />
    </section>
  );
};

export default Blog;
