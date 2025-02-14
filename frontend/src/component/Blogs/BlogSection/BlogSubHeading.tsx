import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  className?: string;
}

const BlogSubHeading = ({ children, className }: HeadingProps) => {
  return (
    <div className={`font-medium opacity-60 text-xl  ${className}`}>{children}</div>
  );
};

export default BlogSubHeading;
