import { Suspense } from "react";
import Footer from "./Footer/Footer";
import HeroSection from "./HeroSection/HeroSection";
import Navbar from "./Navbar/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center w-full relative">
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Home;
