import BlogAuthor from "./BlogAuthor";
import BlogHeading from "./BlogHeading";
import BlogSubHeading from "./BlogSubHeading";
import ReactionFragement from "./ReactionFragement";

interface Blog {
  heading: string;
  subHeading: string;
  src: string;
  author: string;
  publishDate: string;
  readTime: string;
  likeCount: string;
  isBookMarked?: boolean;
}

const BlogIntro = ({
  heading,
  subHeading,
  src,
  author,
  publishDate,
  readTime,
  likeCount,
  isBookMarked
}: Blog) => {
  return (
    <div className="py-12">
      <BlogHeading>{heading}</BlogHeading>
      <BlogSubHeading>{subHeading}</BlogSubHeading>
      <BlogAuthor
        className=""
        src={src}
        author={author}
        publishDate={publishDate}
        readTime={readTime}
      />
      <ReactionFragement likeCount={likeCount} isBookMarked={isBookMarked ?? false} />
    </div>
  );
};

export default BlogIntro;
