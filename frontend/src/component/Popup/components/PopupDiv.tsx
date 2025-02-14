import { ReactNode } from "react";

const PopupDiv = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-full absolute top-0 left-0 z-50 bg-white/95 flex justify-center items-center">
      <div className=" w-[100%] md:w-[70%] lg:w-1/2 relative bg-white h-full shadow-[0px_-10px_5px_5px_#e2e8f0] flex flex-col justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default PopupDiv;
