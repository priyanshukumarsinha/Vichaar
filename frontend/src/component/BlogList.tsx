import { Link } from "react-router-dom";
import BlogDesc from "./AllBlogs/BlogDesc";

interface Blog {
  id: string;
  authorName: string;
  authorImg: string;
  title: string;
  isBookMarked: boolean;
  likeCount: string;
  publishDate: string;
  readTime: string;
  subHeading: string;
}

interface BlogListProps {
  blogs: Blog[];
}

const BlogList = ({ blogs }: BlogListProps) => {
  return (
    <>
      {blogs.map((blog) => (
        <Link to={`/blog/${blog.id}`} key={blog.id}>
          <BlogDesc
            authorName={blog.authorName}
            authorImg={blog.authorImg}
            blogImg="https://miro.medium.com/v2/resize:fit:720/format:webp/1*5-m-7RBfW6YnEPIwTHJvPw.jpeg"
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
  );
};

export default BlogList;
