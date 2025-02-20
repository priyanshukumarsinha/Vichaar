import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  className?: string;
}

const AllBlogsHeading = ({ children, className }: HeadingProps) => {
  return (
    <div className={`font-black text-[25px] py-2  ${className}`}>{children}</div>
  );
};

export default AllBlogsHeading;
