import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  className?: string;
}

const Heading = ({ children, className }: HeadingProps) => {
  return (
    <div className={`font-medium text-3xl font-gt-super ${className}`}>
      {children}
    </div>
  );
};

export default Heading;
