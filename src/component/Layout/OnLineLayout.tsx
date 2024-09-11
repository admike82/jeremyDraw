import { PropsWithChildren } from "react";
import Navbar from "../navBar/Navbar";

type props = {
  className?: string;
};

const OnLineLayout = ({ children, className }: PropsWithChildren<props>) => {
  return (
    <div className={className}>
      <Navbar />
      {children}
    </div>
  );
};

export default OnLineLayout;
