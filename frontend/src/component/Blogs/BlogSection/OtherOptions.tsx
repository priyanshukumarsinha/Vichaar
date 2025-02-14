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
          <PiBookmarksSimpleFill className="text-xl opacity-80 hover:opacity-100" />
        ) : (
          <PiBookmarksThin className="text-xl opacity-80 hover:opacity-100" />
        )}
      </div>
      <CiShare1 className="text-xl opacity-80 hover:opacity-100" />
    </div>
  );
};

export default OtherOptions;
