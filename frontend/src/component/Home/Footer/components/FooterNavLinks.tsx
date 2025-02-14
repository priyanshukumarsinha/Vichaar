import FooterNavLink from "./FooterNavLink";
import footerNavLinks from "../../../../data/footerNavLinks.json";

const FooterNavLinks = () => {
  return (
    <ul className="flex gap-10 justify-center items-center w-full text-xs font-medium py-5">
      {footerNavLinks.map((link) => (
        <FooterNavLink key={link.label} link={link} />
      ))}
    </ul>
  );
};

export default FooterNavLinks;
