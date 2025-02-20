import Like from "./Like";
import { IoChatbubbleOutline } from "react-icons/io5";

const Reaction = ({likeCount}: {likeCount: String}) => {
  return (
    <div className="flex gap-5 items-center">
      <Like likeCount = {likeCount}/>
      <IoChatbubbleOutline className="opacity-50 text-sm hover:opacity-100 cursor-pointer" />
    </div>
  );
};

export default Reaction;
