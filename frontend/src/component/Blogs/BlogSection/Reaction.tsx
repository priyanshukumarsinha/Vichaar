import Like from "./Like";
import { IoChatbubbleOutline } from "react-icons/io5";

const Reaction = ({likeCount}: {likeCount: String}) => {
  return (
    <div className="flex gap-7 items-center">
      <Like likeCount = {likeCount}/>
      <IoChatbubbleOutline className="opacity-50 text-lg hover:opacity-100" />
    </div>
  );
};

export default Reaction;
