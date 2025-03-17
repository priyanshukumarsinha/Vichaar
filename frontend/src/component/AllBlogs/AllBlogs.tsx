import BlogContainer from "../Blogs/BlogSection/BlogContainer";
import BlogNavbar from "../Blogs/Navbar/BlogNavbar";
import Footer from "../Home/Footer/Footer";
import { Suspense, lazy } from "react";
import useFetchBlogs from "../../hooks/useFetchBlogs";

// Lazy-load BlogList
const BlogList = lazy(() => import("../BlogList"));

const AllBlogs = () => {
  const { blogData, loading } = useFetchBlogs();

  return (
    <div className="w-full flex justify-center items-center flex-col">
      <BlogNavbar />

      {loading ? (
        <div className="h-[80vh] flex justify-center items-center">Loading blogs...</div>
      ) : (
        <BlogContainer>
          {blogData.length > 0 ? (
            <Suspense fallback={<div>Loading component...</div>}>
              <BlogList blogs={blogData} />
            </Suspense>
          ) : (
            <p>No blogs found.</p>
          )}
        </BlogContainer>
      )}

      <Footer />
    </div>
  );
};

export default AllBlogs;
