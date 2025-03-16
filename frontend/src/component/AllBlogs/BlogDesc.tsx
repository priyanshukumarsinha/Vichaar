import OtherOptions from "../Blogs/BlogSection/OtherOptions";
import Reaction from "../Blogs/BlogSection/Reaction";
import AllBlogsHeading from "./AllBlogsHeading";
import AllBlogsSubHeading from "./AllBlogsSubHeading";
import AuthorIntro from "./AuthorIntro";

interface BlogDescProps {
  authorName: string;
  authorImg?: string;
  title: string;
  subHeading: string;
  blogImg?: string;
  publishDate: string;
  readTime: string;
  likeCount?: string;
  isBookMarked?: boolean;
}

const BlogDesc = ({
  authorName,
  authorImg,
  title,
  subHeading,
  blogImg,
  publishDate,
  readTime,
  likeCount,
  isBookMarked,
}: BlogDescProps) => {
  console.log(authorName)
  const date = new Date(publishDate)
  return (
    <div className="w-full border-b-1 border-gray-100 py-10 ">
      <AuthorIntro name={authorName} authorImg={authorImg} />
      <div className="flex justify-between ">
        <div className="w-[70%] ">
          <AllBlogsHeading>{title}</AllBlogsHeading>
          <AllBlogsSubHeading>{subHeading}</AllBlogsSubHeading>
        </div>
        <div className={`w-[27%] h-full py-4`}>
          <img
            src={blogImg}
            alt="blog"
            className="w-full h-full object-cover max-h-[120px]"
          />
        </div>
      </div>
      <div className="flex gap-4 items-center justify-between w-[70%] pr-4 mt-2">
        <div className="flex gap-4 items-center">
          <div className="hidden sm:block">
            <p className="text-xs font-medium opacity-70 ">
              {date.toDateString()} · {readTime} min read
            </p>
          </div>
          <Reaction likeCount={likeCount || "0"} />
        </div>
        <OtherOptions isBookMarked={isBookMarked ?? false} />
      </div>
    </div>
  );
};

export default BlogDesc;
