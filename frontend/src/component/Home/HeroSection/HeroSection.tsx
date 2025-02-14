import AuthPopup from "../../Popup/AuthPopup";
import NavButton from "../../ui/NavButton";
import HeroBranding from "./components/HeroBranding";
import HeroImage from "./components/HeroImage";
import { useAuthStore } from "../../../store/authState";

const HeroSection = () => {
  const openPopup = useAuthStore((state) => state.openPopup);
  return (
    <section className="w-full  h-full flex justify-between items-center ">
      <AuthPopup />
      <div className="w-[750px] sm:w-screen min-w-[65%]  h-full ml-5 sm:mx-14 md:ml-18 lg:ml-26 flex flex-col justify-center">
        <HeroBranding />
        <div>
          <NavButton
            onClick={() => openPopup(true)}
            className=" bg-green-600  lg:bg-black text-white px-7 py-2 text-md lg:text-xl"
          >
            Start Reading
          </NavButton>
        </div>
      </div>
      <HeroImage
        src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png"
        label="Vichaar"
      />
    </section>
  );
};

export default HeroSection;
