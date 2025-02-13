import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="w-full  border-b-1 px-5 sm:px-14 md:px-18 lg:px-26 py-5 flex justify-between items-center bg-white z-10">
      <Logo />
      <nav className="flex gap-10">
        <ul className="gap-10 text-sm font-medium justify-center items-center flex">
          <li className="hidden md:flex">Our Story</li>
          <li className="hidden md:flex">Membership</li>
          <li className="hidden md:flex">Write</li>
          <li className="hidden sm:flex">Sign in</li>
        </ul>
        <button>
          <span className="text-sm opacity-90 hover:opacity-100 bg-black px-5 py-3 text-white rounded-3xl font-medium">
            Get Started
          </span>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
