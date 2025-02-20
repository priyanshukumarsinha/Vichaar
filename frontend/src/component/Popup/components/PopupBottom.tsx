import { ReactNode } from "react";

const PopupBottom = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`${className} flex text-[13px] text-center px-24 leading-5 opacity-80 font-normal pt-20 flex-col`}
    >
      {children}
    </div>
  );
};

export default PopupBottom;
