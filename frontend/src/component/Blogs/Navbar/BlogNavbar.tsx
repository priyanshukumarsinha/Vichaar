import { memo } from "react";
import Logo from "../../Home/Navbar/components/Logo";
// import SearchInput from "../SearchInput/SearchInput";
import BlogNavContainer from "./BlogNavContainer";
import BlogNavLinks from "./BlogNavLinks";


const BlogNavbar = () => {
  return (
    <BlogNavContainer className="flex justify-between w-full">
      <div className="flex items-center gap-10 ">
        <Logo />
        {/* <SearchInput /> */}
      </div>
      <BlogNavLinks />
    </BlogNavContainer>
  );
};

export default memo(BlogNavbar);
