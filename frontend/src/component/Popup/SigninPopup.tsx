import PopupDiv from "./components/PopupDiv";
import PopupHeading from "./components/PopupHeading";
import PopupBottom from "./components/PopupBottom";
import PopupAlternate from "./components/PopupAlternate";
import PopupClose from "./components/PopupClose";
import AuthButtonList from "./components/AuthButtonList";

const SigninPopup = ({
  fn,
  closePopup,
}: {
  fn: () => void;
  closePopup: () => void;
}) => {
  return (
    <PopupDiv>
      <PopupHeading>Welcome back.</PopupHeading>
      <PopupClose fn={closePopup} /> {/* Close popup on click */}
      <AuthButtonList action="Sign in" />
      <PopupAlternate message="No Account?" linkText="Create one" fn={fn} />
      <PopupBottom>
        <p className="pb-10">Forgot email or trouble signing in? Get help.</p>
        <p>
          Click “Sign in” to agree to Medium’s Terms of Service and acknowledge
          that Medium’s Privacy Policy applies to you.
        </p>
      </PopupBottom>
    </PopupDiv>
  );
};

export default SigninPopup;
