import { RxCross1 } from "react-icons/rx";

const PopupClose = ({ fn }: { fn: Function }) => {
  return (
    <div
      className="absolute top-5 right-5 opacity-50 cursor-pointer"
      onClick={() => fn(false)}
    >
      <RxCross1 />
    </div>
  );
};

export default PopupClose;
