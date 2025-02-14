import ProfileIcon from "./ProfileIcon";
import { TfiPencilAlt } from "react-icons/tfi";
import BlogNavButton from "./BlogNavButton";
import { useAuthStore } from "../../../store/authState";
import AuthPopup from "../../Popup/AuthPopup";

const BlogNavLinks = () => {
  const openPopup = useAuthStore((state) => state.openPopup);
  return (
    <nav className="flex gap-2 items-center">
      <AuthPopup />
      <BlogNavButton
        className="items-center justify-center gap-2 hidden sm:flex"
        onClick={() => openPopup(true)}
      >
        <TfiPencilAlt className="text-xl" />
        Write
      </BlogNavButton>
      <BlogNavButton
        className="bg-green-700 text-white text-xs opacity-80"
        onClick={() => openPopup(false)}
      >
        Sign up
      </BlogNavButton>
      <BlogNavButton onClick={() => openPopup(true)}>Sign in</BlogNavButton>
      <ProfileIcon className="hidden sm:flex" />
    </nav>
  );
};

export default BlogNavLinks;
