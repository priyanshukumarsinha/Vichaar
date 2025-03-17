import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../constant.ts";

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

const useFetchBlogs = () => {
  const [blogData, setBlogData] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  const getAllBlogs = async () => {
    setLoading(true); // Ensure loading is true before fetch
    try {
      const response = await axios.get(`${BACKEND_URL}/blog/blogs`);
      setBlogData(response.data.data.blogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  return { blogData, loading };
};

export default useFetchBlogs;
