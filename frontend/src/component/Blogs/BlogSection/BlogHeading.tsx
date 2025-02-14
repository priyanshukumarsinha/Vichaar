import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  className?: string;
}

const BlogHeading = ({ children, className }: HeadingProps) => {
  return (
    <div className={`font-black text-[40px]  ${className}`}>
      {children}
    </div>
  );
};

export default BlogHeading;
