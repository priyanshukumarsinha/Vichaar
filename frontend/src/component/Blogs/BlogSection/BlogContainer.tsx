import { ReactNode } from "react";

const BlogContainer = ({ children, className }: { children: ReactNode , className?: string}) => {
  return (
    <div className={`min-h-screen xl:w-1/2 lg:w-[60%] md:w-[80%] sm:w-[90%] w-full px-5 ${className}`}>
      {children}
    </div>
  );
};

export default BlogContainer;
