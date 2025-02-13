import { ReactNode } from "react";

const Heading = ({ children }: { children: ReactNode }) => {
  return <div className="font-medium text-3xl font-gt-super ">{children}</div>;
};

export default Heading;
