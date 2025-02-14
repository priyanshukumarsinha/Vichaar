import Reaction from "./Reaction";
import OtherOptions from "./OtherOptions";

const ReactionFragement = ({
  likeCount,
  isBookMarked,
  className
}: {
  likeCount: string;
  isBookMarked: boolean;
  className?:string
}) => {
  return (
    <div className={`w-full justify-between flex py-2 border-b-1 border-gray-100 ${className}`}>
      <Reaction likeCount={likeCount} />
      <OtherOptions isBookMarked={isBookMarked ?? false} />
    </div>
  );
};

export default ReactionFragement;
