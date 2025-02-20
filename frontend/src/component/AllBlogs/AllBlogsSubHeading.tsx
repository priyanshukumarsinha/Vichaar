import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  className?: string;
}
const AllBlogsSubHeading = ({ children, className }: HeadingProps) => {
  return (
    <div className={`font-medium opacity-60 text-sm  ${className}`}>
      {children}
    </div>
  );
};

export default AllBlogsSubHeading;
