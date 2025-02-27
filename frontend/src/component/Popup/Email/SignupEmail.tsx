import { useState } from "react";
import NavButton from "../../ui/NavButton";
import PopupBottom from "../components/PopupBottom";
import PopupClose from "../components/PopupClose";
import PopupDiv from "../components/PopupDiv";
import PopupHeading from "../components/PopupHeading";
import ClipLoader from "react-spinners/ClipLoader";
import SuccessMessage from "./SuccessMessage";
import PopupInput from "./PopupInput";
import GoBackMessage from "./GoBackMessage";
import ErrorMessage from "./ErrorMessage";
import { useIsAuthStore } from "../../../store/isAuthState";
import axios from "axios";
import { BACKEND_URL } from "../../../constant";


interface SignupEmailProps {
  closePopup: () => void;
  goBack: () => void;
}

const SignupEmail = ({ closePopup, goBack }: SignupEmailProps) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const setisAuth = useIsAuthStore((state) => state.setIsAuth);
  const [errorMessage, setErrorMessage] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handles a successful sign-up simulation
  const handleSuccess = () => {
    setSuccess(true);
    setLoading(false);

    setTimeout(() => {
      closePopup();
      setisAuth(true);
      window.location.href = "/";
      setSuccess(false);
      setError(false);
    }, 1000);
  };

  // API call for signup
  const requestHandler = async() => {
    setLoading(true);
    
    const data = {
      email: email,
      username: name,
      name: name,
      password: password
    }

    console.log("Signup in progress ...")

    
    const response = await axios.post(`${BACKEND_URL}/user/signup`, data);

    
    
    if(response.data.status === "error"){
      setError(true);
      setErrorMessage(response.data.message);
    }
    else{
      const token = response.data.data.token;
      const user = response.data.data.user;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      console.log("Sign up successful");
      handleSuccess();
    }

    setLoading(false);
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
          {error && <ErrorMessage message={errorMessage}/>}
          {/* Input Fields */}
          <div className="mt-10 text-center">
            <PopupInput label="Your name" type="name" value={name} changeValue={setName} />
            <PopupInput label="Your email" type="email" value={email} changeValue={setEmail} />
            <PopupInput label="Your password" type="password" value={password} changeValue={setPassword} />
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
