import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { VscHeartFilled } from "react-icons/vsc";

const Like = ({ likeCount }: { likeCount: String }) => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="flex gap-1 items-center cursor-pointer">
      <div>
        {isLiked ? (
          <VscHeartFilled
            className="text-red-500 text-lg opacity-80 hover:opacity-100"
            onClick={() => setIsLiked(false)}
          />
        ) : (
          <CiHeart
            className="text-gray-500 text-lg opacity-80 hover:opacity-100"
            onClick={() => setIsLiked(true)}
          />
        )}
      </div>
      <span className="text-gray-500 text-sm  opacity-80 hover:opacity-100">
        {likeCount}
      </span>
    </div>
  );
};

export default Like;
