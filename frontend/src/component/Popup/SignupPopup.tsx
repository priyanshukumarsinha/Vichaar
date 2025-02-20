import PopupDiv from "./components/PopupDiv";
import PopupHeading from "./components/PopupHeading";
import PopupBottom from "./components/PopupBottom";
import PopupAlternate from "./components/PopupAlternate";
import PopupClose from "./components/PopupClose";
import AuthButtonList from "./components/AuthButtonList";

const SignupPopup = ({
  fn,
  closePopup,
  openSignupWithEmail
}: {
  fn: () => void;
  closePopup: () => void;
  openSignupWithEmail: () => void;
}) => {
  return (
    <PopupDiv>
      <PopupHeading>Join Medium.</PopupHeading>
      <PopupClose fn={closePopup} />

      <AuthButtonList action="Sign up" fn={openSignupWithEmail}/>

      <PopupAlternate
        message="Already have an account?"
        linkText="Sign in"
        fn={fn}
      />

      <PopupBottom>
        <p className="pb-10">
          By signing up, you agree to our Terms of Service.
        </p>
      </PopupBottom>
    </PopupDiv>
  );
};

export default SignupPopup;
