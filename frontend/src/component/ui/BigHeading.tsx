import { ReactNode } from "react";
import Heading from "./Heading";

const BigHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading className=" tracking-tight text-[80px] sm:text-[90px] md:text-[100px] lg:text-[110px] leading-[80px] lg:leading-[100px] opacity-85 ">
      {children}
    </Heading>
  );
};

export default BigHeading;
