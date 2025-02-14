import { ReactNode } from "react";

interface AuthButtonProps {
  children: ReactNode;
  message: string;
}

const AuthButton = ({ children, message }: AuthButtonProps) => {
  return (
    <button className="rounded-full border w-[300px] px-3 py-2 my-2 flex justify-around items-center">
      {/* logo */}
      <p className="text-xl">
        {children}
      </p>
      {/* message */}
      <p className="w-full text-md font-medium">{message}</p>
    </button>
  );
};

export default AuthButton;
