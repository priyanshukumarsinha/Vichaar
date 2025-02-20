import { TiTick } from "react-icons/ti";

const SuccessMessage = ({ action }: { action: string }) => {
  return (
    <>
      <TiTick className="text-3xl my-2" />
      {action} successful
      <p className="text-xs my-3 font-medium">Redirecting to Main Page ... </p>
    </>
  );
};

export default SuccessMessage;
