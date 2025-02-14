import FooterNavLinks from "./components/FooterNavLinks";

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={`border-t-1 w-full bg-white z-1 ${className}`}>
      <FooterNavLinks />
    </footer>
  );
};

export default Footer;
