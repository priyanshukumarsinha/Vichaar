import Footer from "../Home/Footer/Footer";
import BlogSection from "./BlogSection/BlogSection";
import BlogNavbar from "./Navbar/BlogNavbar";

const Blog = () => {
  return (
    <section className="flex justify-between items-center min-h-screen flex-col">
      <BlogNavbar />
      <BlogSection />
      <Footer className="border-gray-300" />
    </section>
  );
};

export default Blog;
