import SignupPopup from "./SignupPopup";
import SigninPopup from "./SigninPopup";
import { useAuthStore } from "../../store/authState";

const AuthPopup = () => {
  const { isVisible, isSignin, closePopup, openPopup } = useAuthStore();

  if (!isVisible) return null;

  return (
    <div className="flex justify-center items-center bg-black bg-opacity-50">
      {isSignin ? (
        <SigninPopup fn={() => openPopup(false)} closePopup={closePopup} />
      ) : (
        <SignupPopup fn={() => openPopup(true)} closePopup={closePopup} />
      )}
    </div>
  );
};

export default AuthPopup;
