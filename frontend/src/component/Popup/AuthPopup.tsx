import SignupPopup from "./SignupPopup";
import SigninPopup from "./SigninPopup";
import { useAuthStore } from "../../store/authState";
import SigninEmail from "./Email/SigninEmail";
import SignupEmail from "./Email/SignupEmail";

const AuthPopup = () => {
  const {
    isVisible,
    isSignin,
    isSignupwithEmail,
    isSigninwithEmail,
    closePopup,
    openPopup,
    openSignupWithEmail,
    openSigninWithEmail,
  } = useAuthStore();

  if (!isVisible) return null;

  return (
    <div className="flex justify-center items-center bg-black bg-opacity-50">
      {isSignupwithEmail ? (
        <SignupEmail closePopup={closePopup} goBack={() => openPopup(false)} />
      ) : isSigninwithEmail ? (
        <SigninEmail closePopup={closePopup} goBack={() => openPopup(true)} />
      ) : isSignin ? (
        <SigninPopup
          fn={() => openPopup(false)}
          closePopup={closePopup}
          openSigninWithEmail={openSigninWithEmail}
        />
      ) : (
        <SignupPopup
          fn={() => openPopup(true)}
          closePopup={closePopup}
          openSignupWithEmail={openSignupWithEmail}
        />
      )}
    </div>
  );
};

export default AuthPopup;
