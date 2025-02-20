import { useState } from "react";
import NavButton from "../../ui/NavButton";
import PopupBottom from "../components/PopupBottom";
import PopupClose from "../components/PopupClose";
import PopupDiv from "../components/PopupDiv";
import PopupHeading from "../components/PopupHeading";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from "react-router-dom";
import SuccessMessage from "./SuccessMessage";
import PopupInput from "./PopupInput";
import GoBackMessage from "./GoBackMessage";
import ErrorMessage from "./ErrorMessage";
import { useIsAuthStore } from "../../../store/isAuthState";

interface SignupEmailProps {
  closePopup: () => void;
  goBack: () => void;
}

const SignupEmail = ({ closePopup, goBack }: SignupEmailProps) => {
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
        <SuccessMessage action="Sign up" />
      ) : (
        <>
          <PopupHeading>Sign up with email</PopupHeading>
          <p className="font-medium -mt-5">
            Enter your details to create an account.
          </p>
          <PopupClose fn={closePopup} /> {/* Close button */}
          {error && <ErrorMessage />}
          {/* Input Fields */}
          <div className="mt-10 text-center">
            <PopupInput label="Your name" type="name" />
            <PopupInput label="Your email" type="email" />
            <PopupInput label="Your password" type="password" />
          </div>
          {/* Action Button */}
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

export default SignupEmail;
