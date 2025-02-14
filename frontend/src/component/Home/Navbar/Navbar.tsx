import Logo from "./components/Logo";
import NavContainer from "./components/NavContainer";
import NavLinks from "./components/NavLinks";

const Navbar = () => {
  return (
    <NavContainer>
      <Logo />
      <NavLinks />
    </NavContainer>
  );
};

export default Navbar;
