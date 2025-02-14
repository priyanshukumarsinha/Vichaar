import { ReactNode } from "react";

const BlogNavButton = ({
  children,
  className,
  onClick
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
    onClick={onClick}
      className={`rounded-full opacity-60 hover:opacity-100 text-sm font-medium h-[35px] cursor-pointer px-4 ${className}`}
    >
      {children}
    </button>
  );
};

export default BlogNavButton;
