import { ReactNode } from "react";

interface AuthButtonProps {
  children: ReactNode;
  message: string;
  onClick?: () => void;
}

const AuthButton = ({ children, message, onClick }: AuthButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer rounded-full border w-[300px] px-3 py-2 my-2 flex justify-around items-center"
    >
      {/* logo */}
      <p className="text-xl">{children}</p>
      {/* message */}
      <p className="w-full text-md font-medium">{message}</p>
    </button>
  );
};

export default AuthButton;
