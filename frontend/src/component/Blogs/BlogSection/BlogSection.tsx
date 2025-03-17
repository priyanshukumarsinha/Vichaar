import axios from "axios";
import { BACKEND_URL } from "../../../constant";
import BlogAuthor from "./BlogAuthor";
import BlogContainer from "./BlogContainer";
import BlogIntro from "./BlogIntro";
import ReactionFragement from "./ReactionFragement";
import Tags from "./Tags";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";
import { useEffect, useRef, useState, useCallback } from "react";

interface Blog {
  title: string;
  subHeading: string;
  authorName: string;
  publishDate: string;
  readTime: string;
  likeCount: string;
  content: string;
}

const BlogSection = ({ id }: { id: string }) => {
  const editorRef = useRef<EditorJS | null>(null);
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog | null>(null);
  const [blogContent, setBlogContent] = useState<any>(null);

  const tags = ["Terms and Conditions", "Privacy", "Policy"];

  useEffect(() => {
    if (!editorRef.current && blogContent) {
      editorRef.current = new EditorJS({
        holder: "editorjs",
        tools: {
          header: Header,
          paragraph: Paragraph,
        },
        data: blogContent, // ✅ Load content from backend
        readOnly: true, // ✅ Prevent editing
      });
    }

    return () => {
      try {
        if (editorRef.current) {
          editorRef.current.destroy();
          editorRef.current = null;
        }
      } catch (error) {
        console.error("Error destroying EditorJS:", error);
      }
    };
  }, [blogContent]); // ✅ Only runs when `blogContent` changes

  const getBlogById = useCallback(async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/blog/b/${id}`);
      const blogData = response.data.data.blog;

      setBlog(blogData);
      const content = JSON.parse(blogData.content);
      setBlogContent({ ...content, blocks: content.blocks.slice(1) });
    } catch (error) {
      console.error("Error fetching blog:", error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getBlogById();
  }, [getBlogById]);

  return (
    <BlogContainer>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <BlogIntro
          heading={blog?.title || ""}
          subHeading={blog?.subHeading || ""}
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          author={blog?.authorName || ""}
          publishDate={blog?.publishDate || ""}
          readTime={blog?.readTime || ""}
          likeCount={blog?.likeCount || ""}
          isBookMarked={false}
        />
      )}
      {/* <BlogHTMLContent content = {blogContent}/>  */}
      <div
        id="editorjs"
        className={`p-0  ${loading ? "hidden" : "block"}`}
      ></div>
      {loading ? (
        <div>loading ...</div>
      ) : (
        <>
          <div className="flex gap-3">
            {tags && tags.map((tag) => <Tags key={tag} name={tag} />)}
          </div>

          <ReactionFragement
            likeCount="10"
            isBookMarked={false}
            className="border-none"
          />
          <BlogAuthor
            className="my-5"
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            author={blog?.authorName || ""}
            publishDate={blog?.publishDate || ""}
            readTime={blog?.readTime || ""}
          />
        </>
      )}
    </BlogContainer>
  );
};

export default BlogSection;
