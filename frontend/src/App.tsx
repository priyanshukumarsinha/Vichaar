import Navbar from "./component/ui/Navbar";
import HeroSection from "./component/HeroSection";
import Footer from "./component/ui/Footer";

function App() {
  return (
    <div className="h-screen flex flex-col justify-between items-center w-screen">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;
