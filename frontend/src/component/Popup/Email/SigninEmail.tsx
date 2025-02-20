import PopupDiv from "../components/PopupDiv";
import NavButton from "../../ui/NavButton";
import PopupBottom from "../components/PopupBottom";
import PopupClose from "../components/PopupClose";
import PopupHeading from "../components/PopupHeading";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";
import PopupInput from "./PopupInput";
import GoBackMessage from "./GoBackMessage";
import { useIsAuthStore } from "../../../store/isAuthState";

interface SigninEmailProps {
  closePopup: () => void;
  goBack: () => void;
}

const SigninEmail = ({ closePopup, goBack }: SigninEmailProps) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const setisAuth = useIsAuthStore((state) => state.setIsAuth);

  // Handles a successful sign-up simulation
  const handleSuccess = () => {
    setSuccess(true);
    setLoading(false);

    setTimeout(() => {
      closePopup();
      setisAuth(true);
      navigate("/");
      setError(false);
    }, 1000);
  };

  // Simulates API call for signup
  const requestHandler = () => {
    setLoading(true);

    setTimeout(() => {
      console.log("Sign up successful");
      handleSuccess();
    }, 2000);
  };

  if (loading) {
    return (
      <PopupDiv>
        <ClipLoader />
      </PopupDiv>
    );
  }

  return (
    <PopupDiv>
      {success ? (
        <SuccessMessage action="Sign in" />
      ) : (
        <>
          <PopupHeading>Sign in with email</PopupHeading>
          <p className="font-medium -mt-5">
            Enter the details associated with your account.
          </p>
          <PopupClose fn={closePopup} /> {/* Close button */}
          {error && <ErrorMessage />}
          {/* Input Fields */}
          <div className="mt-10 text-center">
            <PopupInput label="Your email" type="email" />
            <PopupInput label="Your password" type="password" />
          </div>
          <NavButton className="my-8 w-1/3" onClick={requestHandler}>
            Continue
          </NavButton>
          {/* Navigation Message */}
          <GoBackMessage goBack={goBack} action="Sign up" />
        </>
      )}

      <PopupBottom className="lg:px-40">
        This site is protected by reCAPTCHA Enterprise and the Google Privacy
        Policy and Terms of Service apply.
      </PopupBottom>
    </PopupDiv>
  );
};

export default SigninEmail;
