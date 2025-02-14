import { ReactNode } from "react";

const PopupHeading = ({ children }: { children: ReactNode }) => {
  return(
    <div className="font-gt-super">
      <h1 className="text-3xl text-center py-10">{children}</h1>
    </div>
  )
};

export default PopupHeading;
