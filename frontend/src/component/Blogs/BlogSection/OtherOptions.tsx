import { PiBookmarksThin } from "react-icons/pi";
import { CiShare1 } from "react-icons/ci";
import { PiBookmarksSimpleFill } from "react-icons/pi";
import { useState } from "react";
const OtherOptions = ({ isBookMarked }: { isBookMarked: boolean }) => {
  const [bookMark, setBookMark] = useState(isBookMarked);
  return (
    <div className="flex gap-10">
      <div onClick={() => setBookMark(!bookMark)}>
        {bookMark ? (
          <PiBookmarksSimpleFill className="text-md opacity-60 hover:opacity-100 cursor-pointer" />
        ) : (
          <PiBookmarksThin className="text-md opacity-60 hover:opacity-100 cursor-pointer" />
        )}
      </div>
      <CiShare1 className="text-md opacity-80 hover:opacity-100 cursor-pointer" />
    </div>
  );
};

export default OtherOptions;
