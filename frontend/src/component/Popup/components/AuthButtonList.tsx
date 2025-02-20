import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import AuthButton from "./AuthButton";

const AuthButtonList = ({ action, fn }: { action: string; fn: () => void }) => {
  return (
    <>
      <AuthButton message={`${action} with Google`}>
        <FcGoogle />
      </AuthButton>
      <AuthButton message={`${action} with Github`}>
        <FaGithub />
      </AuthButton>
      <AuthButton message={`${action} with email`} onClick={() => fn()}>
        <AiOutlineMail />
      </AuthButton>
    </>
  );
};

export default AuthButtonList;
