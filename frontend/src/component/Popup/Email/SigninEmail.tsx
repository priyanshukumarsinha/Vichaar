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
import axios from "axios";
import { BACKEND_URL } from "../../../constant";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSuccess = () => {
    setSuccess(true);
    setLoading(false);

    setTimeout(() => {
      closePopup();
      setisAuth(true);
      navigate("/");
      window.location.href = "/";
      setError(false);
    }, 1000);
  };

  const requestHandler = async () => {
    try {
      setLoading(true);
      setError(false);
      setErrorMessage("");

      console.log("Signing in...");

      const { data } = await axios.post(`${BACKEND_URL}/user/signin`, {
        email,
        password,
      });

      if (data.status !== "success")
        throw new Error(data.message || "Sign-in failed");

      const { token, user } = data.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      console.log("Sign-in successful");
      handleSuccess();
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message ||
        error.message ||
        "An unexpected error occurred.";
      console.error("Error:", errorMessage);
      setError(true);
      setErrorMessage(errorMessage);
    } finally {
      setLoading(false);
    }
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
          {error && <ErrorMessage message={errorMessage} />}
          {/* Input Fields */}
          <div className="mt-10 text-center">
            <PopupInput
              label="Your email"
              type="email"
              value={email}
              changeValue={setEmail}
            />
            <PopupInput
              label="Your password"
              type="password"
              value={password}
              changeValue={setPassword}
            />
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
