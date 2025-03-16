import axios from "axios";
import { BACKEND_URL } from "../../../constant";
import BlogAuthor from "./BlogAuthor";
import BlogContainer from "./BlogContainer";
import BlogHTMLContent from "./BlogHTMLContent";
import BlogIntro from "./BlogIntro";
import ReactionFragement from "./ReactionFragement";
import Tags from "./Tags";
import { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";

const BlogSection = ({id}: {id: string}) => {
  const editorRef = useRef<EditorJS | null>(null);

  const tags = ["Terms and Conditions", "Privacy", "Policy"];
  const [blog, setBlog] = useState(null)
  const [blogContent, setBlogContent] = useState(null)

  useEffect(() => {
    if (!editorRef.current) {
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
      editorRef.current?.destroy();
      editorRef.current = null;
    };
  }, [blogContent]);

  console.log(blogContent)

  
  const getBlogById = async() => {
    
    const response = await axios.get(`${BACKEND_URL}/blog/b/${id}`);
    setBlog(response.data.data.blog)
    console.log("blog : ", response.data.data.blog.content)
    setBlogContent(JSON.parse(response.data.data.blog.content));
  }

  useEffect(()=> {
    getBlogById();
  }, [])
  
  return (
    <BlogContainer>
      <BlogIntro
        heading={blog?.title}
        subHeading="Effective: September 3, 2021"
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        author="Priyanshu Kumar Sinha"
        publishDate="Sep 3, 2021"
        readTime="7 min read"
        likeCount="10"
        isBookMarked={false}
      />
      {/* <BlogHTMLContent content = {blogContent}/> */}
      <div id="editorjs" className="p-0 text-justify"></div>
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
        author="Priyanshu Kumar Sinha"
        publishDate="Sep 3, 2021"
        readTime="7 min read"
      />
    </BlogContainer>
  );
};

export default BlogSection;
