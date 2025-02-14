import { useNavigate } from "react-router-dom";

interface NavLinkProps {
  label: string;
  showOnMobile: boolean;
  onClick?: () => void;
  className?: string;
  props?: Object;
  path?: string;
}

const NavLink = ({ link }: { link: NavLinkProps }) => {
  const navigate = useNavigate();
  return (
    <li
      className={`${
        link.showOnMobile ? "flex" : "hidden md:flex"
      } cursor-pointer ${link.className}`}
      onClick={link.onClick? link.onClick : () => navigate(link.path ? link.path : "/")}
      {...link.props}
    >
      {link.label}
    </li>
  );
};

export default NavLink;
