import React from "react";
import { motion } from "framer-motion";
import LinkButton from "../LinkButton";

const MainSection = ({ signInToggle, setSignInToggle }) => {
  return (
    <section>
      <div className="h-[calc(100vh-100px)] flex flex-col items-center justify-center bg-[#FFC017]">
        <motion.h1
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          exit={{ x: -200 }}
          className="px-[20px] text-[40px] md:text-[60px] lg:text-[90px] font-semibold transition-all duration-100 ease text-center"
          style={{ fontFamily: "Playfair Display" }}
        >
          Welcome to Vichaar.
        </motion.h1>
        <p className="text-lg text-black px-[10px] text-[9px] md:text-[15px] lg:text-[20px] text-center">
          Discover stories, insights, and expertise from writers on any topic.
        </p>

        <LinkButton
          className="px-[40px] mt-[50px]"
          onClick={() => {
            setSignInToggle(!signInToggle);
          }}
        >
          Start Reading
        </LinkButton>
      </div>
    </section>
  );
};

export default MainSection;
