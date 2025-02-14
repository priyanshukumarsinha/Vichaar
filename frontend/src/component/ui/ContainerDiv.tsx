import  { ReactNode } from "react";

const ContainerDiv = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`mx-5 sm:mx-14 md:mx-18 lg:mx-26  ${className}`}>
      {children}
    </div>
  );
};

export default ContainerDiv;
