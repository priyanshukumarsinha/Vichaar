import Footer from "../Home/Footer/Footer";
import Navbar from "../Home/Navbar/Navbar";
import ContainerDiv from "../ui/ContainerDiv";
import Heading from "../ui/Heading";
import AboutContent from "./AboutContent";

const About = () => {
  return (
    <>
      <Navbar />
      <ContainerDiv className="my-5 sm:my-8 md:my-10 lg:my-20 xl:my-30">
        <div className="w-full lg:w-2/3">
          <Heading className="mb-5 sm:mb-8 md:mb-10 lg:mb-20 xl:mb-30 text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px]">
            A Space for Ideas, Learning, and Growth
          </Heading>
          <AboutContent />

        </div>
      </ContainerDiv>
      <Footer />
    </>
  );
};

export default About;
