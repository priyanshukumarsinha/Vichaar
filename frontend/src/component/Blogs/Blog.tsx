import Footer from "../Home/Footer/Footer";
import NotFound from "../NotFound";
import BlogSection from "./BlogSection/BlogSection";
import BlogNavbar from "./Navbar/BlogNavbar";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams<{ id?: string }>();

  // Redirect to 404 page if ID is missing
  if (!id) return <NotFound />;

  return (
    <section className="flex flex-col justify-between items-center min-h-screen">
      <BlogNavbar />
      <BlogSection id={id} />
      <Footer className="border-gray-300" />
    </section>
  );
};

export default Blog;
