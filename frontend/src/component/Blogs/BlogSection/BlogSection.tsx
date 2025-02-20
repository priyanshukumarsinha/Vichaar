import BlogAuthor from "./BlogAuthor";
import BlogContainer from "./BlogContainer";
import BlogHTMLContent from "./BlogHTMLContent";
import BlogIntro from "./BlogIntro";
import ReactionFragement from "./ReactionFragement";
import Tags from "./Tags";

const BlogSection = () => {
  const tags = ["Terms and Conditions", "Privacy", "Policy"];
  return (
    <BlogContainer>
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
