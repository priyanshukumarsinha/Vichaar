import Point from "../../ui/Point";

const BlogAuthor = ({
  className,
  src,
  author,
  publishDate,
  readTime,
}: {
  className: string;
  src: string;
  author: string;
  publishDate: string;
  readTime: string;
}) => {
  const date = new Date(publishDate).toDateString();
  return (
    <div
      className={` py-5 pb-10 border-b-1 border-gray-100 flex gap-3 ${className}`}
    >
      <img src={src} alt="author" className="w-12 h-12 rounded-full" />
      <div>
        <div className="flex gap-2 items-center">
          <h3 className="text-md font-medium">{author} </h3>
          <Point />
          <span className="text-green-600 font-medium text-md">Follow</span>
        </div>
        <p className="text-gray-500 text-sm">
          {date} <Point /> {readTime + " mins read"}
        </p>
      </div>
    </div>
  );
};

export default BlogAuthor;
