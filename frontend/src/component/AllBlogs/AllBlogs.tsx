import { Link } from "react-router-dom";
import BlogContainer from "../Blogs/BlogSection/BlogContainer";
import BlogNavbar from "../Blogs/Navbar/BlogNavbar";
import Footer from "../Home/Footer/Footer";
import BlogDesc from "./BlogDesc";
import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../constant";

// some dummy data
const dummyData = [
  {
    id: 1,
    authorName: "Priyanshu Kumar Sinha",
    authorImg: "",
    blogImg:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*Nbd2cZ8F-qN5EdCDLzQUNQ.png",
    heading: "How Much YouTube Paid Me For 320 Shorts in 3 Months",
    isBookMarked: false,
    likeCount: "100",
    publishDate: "Oct 1, 2021",
    readTime: "5",
    subHeading:
      "In the first part, I will briefly describe my career for the context. In the second part, I will go through.",
    link: "https://www.google.com",
  },
  {
    id: 2,
    authorName: "Sneha R",
    authorImg:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*5-m-7RBfW6YnEPIwTHJvPw.jpeg",
    blogImg:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*5-m-7RBfW6YnEPIwTHJvPw.jpeg",
    heading: "How to Learn Full Stack Development in 2024",
    isBookMarked: false,
    likeCount: "100",
    publishDate: "Oct 1, 2021",
    readTime: "3",
    subHeading:
      "In the first part, I will briefly describe my career for the context. In the second part, I will go through.",
    link: "https://www.vichaar.live",
  },
];

const AllBlogs = () => {
  const [blogData, setBlogData] = useState(dummyData);

  const getAllBlogs = async() => {
    const response = await axios.get(`${BACKEND_URL}/blog/blogs`);
    console.log(response.data.data.blogs)
    setBlogData(response.data.data.blogs)
  }


  useEffect(() => {
    getAllBlogs()
  }, [])

  // console.log(dummyData, blogData)

  return (
    <div className="w-full flex justify-center items-center flex-col">
      <BlogNavbar />
      <BlogContainer>
        {blogData.length > 0 && (
          <>
            {blogData.map((blog) => (
              <Link to={`/blog/${blog.id}`} key={blog.id}>
                <BlogDesc
                  authorName={blog.authorName}
                  authorImg={blog.authorImg}
                  blogImg={"https://miro.medium.com/v2/resize:fit:720/format:webp/1*5-m-7RBfW6YnEPIwTHJvPw.jpeg"}
                  title={blog.title}
                  isBookMarked={blog.isBookMarked}
                  likeCount={blog.likeCount}
                  publishDate={blog.publishDate}
                  readTime={blog.readTime}
                  subHeading={blog.title}
                />
              </Link>
            ))}
          </>
        )}
      </BlogContainer>
      <Footer />
    </div>
  );
};

export default AllBlogs;
