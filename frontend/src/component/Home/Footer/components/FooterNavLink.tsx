import { useNavigate } from "react-router-dom";

interface FooterNavLInkProps {
  link: {
    label: string;
    path?: string;
  };
}

const FooterNavLink = ({ link }: FooterNavLInkProps) => {
  const navigate = useNavigate();
  return <li className="opacity-70 cursor-pointer" onClick={()=> {navigate(link.path ? link.path : "/")}}>{link.label}</li>;
};

export default FooterNavLink;
