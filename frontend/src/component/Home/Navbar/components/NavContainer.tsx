import { ReactNode } from "react";

const NavContainer = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`w-full border-b px-5 sm:px-14 md:px-18 lg:px-26 py-5 flex justify-between items-center bg-white z-10 ${className}`}
    >
      {children}
    </div>
  );
};

export default NavContainer;
