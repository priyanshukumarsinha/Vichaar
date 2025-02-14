import BlogAuthor from "./BlogAuthor";
import BlogHTMLContent from "./BlogHTMLContent";
import BlogIntro from "./BlogIntro";
import ReactionFragement from "./ReactionFragement";
import Tags from "./Tags";

const BlogSection = () => {
  const tags = ["Terms and Conditions", "Privacy", "Policy"];
  return (
    <div className="min-h-screen xl:w-1/2 lg:w-[60%] md:w-[80%] sm:w-[90%] w-full px-5">
      <BlogIntro
        heading="Medium Terms of Service"
        subHeading="Effective: September 3, 2021"
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        author="Priyanshu Kumar Sinha"
        publishDate="Sep 3, 2021"
        readTime="7 min read"
        likeCount="10"
        isBookMarked={false}
      />
      <BlogHTMLContent />

      <div className="flex gap-3">
        {tags && tags.map((tag) => <Tags key={tag} name={tag} />)}
      </div>

      <ReactionFragement likeCount="10" isBookMarked={false} className="border-none" />
      <BlogAuthor
        className="my-5"
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        author="Priyanshu Kumar Sinha"
        publishDate="Sep 3, 2021"
        readTime="7 min read"
      />
    </div>
  );
};

export default BlogSection;
