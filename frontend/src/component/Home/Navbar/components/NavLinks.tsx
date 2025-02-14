import AuthPopup from "../../../Popup/AuthPopup";
import NavLink from "./NavLink";
import NavButton from "../../../ui/NavButton";
import navLinks from "../../../../data/navLinks.json";
import { useAuthStore } from "../../../../store/authState";

const NavLinks = () => {
  const openPopup = useAuthStore((state) => state.openPopup);

  return (
    <nav className="flex gap-10">
      <AuthPopup />

      <ul className="flex gap-10 text-sm font-medium justify-center items-center">
        {navLinks.map((link) => (
          <NavLink link={link} key={link.label} />
        ))}

        <NavLink
          link={{
            label: "Sign in",
            showOnMobile: true,
            onClick: () => openPopup(true),
            className: "hidden sm:flex cursor-pointer",
          }}
        />
      </ul>

      <NavButton onClick={() => openPopup(false)}>Get Started</NavButton>
    </nav>
  );
};

export default NavLinks;
