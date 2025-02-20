import { ReactNode } from "react";

const WritePopupContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-full absolute top-0 left-0 z-50 bg-white flex justify-center items-center">
      <div className=" w-[100%] md:w-[70%]  relative bg-white h-full  flex flex-col justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default WritePopupContainer;
