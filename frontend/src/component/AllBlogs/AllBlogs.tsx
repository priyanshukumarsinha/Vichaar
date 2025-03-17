import { Link } from "react-router-dom";
import BlogContainer from "../Blogs/BlogSection/BlogContainer";
import BlogNavbar from "../Blogs/Navbar/BlogNavbar";
import Footer from "../Home/Footer/Footer";
import BlogDesc from "./BlogDesc";
import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../constant";

// some dummy data

const AllBlogs = () => {
  const [blogData, setBlogData] = useState([]);

  const getAllBlogs = async () => {
    const response = await axios.get(`${BACKEND_URL}/blog/blogs`);
    console.log(response.data.data.blogs);
    setBlogData(response.data.data.blogs);
    setLoading(false);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllBlogs();
  }, []);

  // console.log(dummyData, blogData)

  return (
    <div className="w-full flex justify-center items-center flex-col">
      <BlogNavbar />
      {loading ? (
        <div className="h-[80vh] flex justify-center items-center">
          loading ...
        </div>
      ) : (
        <BlogContainer>
          {blogData.length > 0 && (
            <>
              {blogData.map((blog) => (
                <Link to={`/blog/${blog.id}`} key={blog.id}>
                  <BlogDesc
                    authorName={blog.authorName}
                    authorImg={blog.authorImg}
                    blogImg={
                      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*5-m-7RBfW6YnEPIwTHJvPw.jpeg"
                    }
                    title={blog.title}
                    isBookMarked={blog.isBookMarked}
                    likeCount={blog.likeCount}
                    publishDate={blog.publishDate}
                    readTime={blog.readTime}
                    subHeading={blog.subHeading}
                  />
                </Link>
              ))}
            </>
          )}
        </BlogContainer>
      )}
      <Footer />
    </div>
  );
};

export default AllBlogs;
