import { useNavigate } from "react-router-dom";
import Heading from "../../../ui/Heading";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div className="cursor-pointer" onClick={() => navigate("/")}>
      <Heading>
        <span className="font-bold">Vichaar</span>
      </Heading>
    </div>
  );
};

export default Logo;
