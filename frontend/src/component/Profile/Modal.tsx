import { ReactNode } from "react";
import PopupClose from "../Popup/components/PopupClose";

const Modal = ({ title, children,fn }: {title:string, children:ReactNode, fn:Function}) => {
    return (
      <div className="w-screen h-screen bg-black/30 flex justify-center items-center absolute top-0 left-0">
        <div className="bg-white rounded max-w-screen lg:w-1/2 xl:w-1/3 m-10 p-7 py-10 relative shadow-md">
          <PopupClose fn={fn} />
          <p className="w-full text-center font-bold pb-8 text-lg">{title}</p>
          {children}
        </div>
      </div>
    );
  };

export default Modal;