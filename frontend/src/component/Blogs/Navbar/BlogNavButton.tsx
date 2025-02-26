import { ReactNode } from "react";

const BlogNavButton = ({
  children,
  className,
  disabled,
  onClick
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}) => {
  return (
    <button
    onClick={disabled ? ()=>{console.log("disabled")} : onClick}
      className={`rounded-full  ${!disabled? '' :'opacity-60'} text-sm font-medium h-[35px] cursor-pointer px-4 ${className}`}
    >
      {children}
    </button>
  );
};

export default BlogNavButton;
