import ProfileIcon from "./ProfileIcon";
import { TfiPencilAlt } from "react-icons/tfi";
import BlogNavButton from "./BlogNavButton";
import { useAuthStore } from "../../../store/authState";
import AuthPopup from "../../Popup/AuthPopup";
// import { PiBellThin } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { useIsAuthStore } from "../../../store/isAuthState";
import { useLocation, useNavigate } from "react-router-dom";
import WritePopup from "../../Write/WritePopup";
import { useState } from "react";

const BlogNavLinks = () => {
  const openPopup = useAuthStore((state) => state.openPopup);
  const isAuthenticated = useIsAuthStore((state) => state.isAuth);
  const navigate = useNavigate();
  const location = useLocation();
  const [showPreview, setShowPreview] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="flex gap-2 items-center">
      <AuthPopup />
      {
        // if location is not /write, then only show write button
        location.pathname !== "/write" ? (
          <BlogNavButton
            className="items-center justify-center gap-2 hidden sm:flex"
            onClick={
              isAuthenticated
                ? () => {
                    navigate("/write");
                  }
                : () => openPopup(true)
            }
          >
            <TfiPencilAlt className="text-xl" />
            Write
          </BlogNavButton>
        ) : (
          <BlogNavButton
            className="bg-green-700 text-white text-xs opacity-80"
            onClick={() => setShowPreview(true)}
          >
            Publish
          </BlogNavButton>
        )
      }

      {showPreview && <WritePopup setShowPreview={() => setShowPreview(false)} />}

      {!isAuthenticated ? (
        <>
          <BlogNavButton
            className="bg-green-700 text-white text-xs opacity-80"
            onClick={() => openPopup(false)}
          >
            Sign up
          </BlogNavButton>
          <BlogNavButton onClick={() => openPopup(true)}>Sign in</BlogNavButton>
        </>
      ) : (
        <div className="flex">
          {location.pathname !== "/write" && (
            <>
              <BlogNavButton className="items-center justify-center gap-2 flex sm:hidden">
                <CiSearch className="text-2xl" />
              </BlogNavButton>
              <BlogNavButton
                className="items-center justify-center gap-2 flex sm:hidden"
                onClick={() => navigate("/write")}
              >
                <TfiPencilAlt className="text-xl" />
              </BlogNavButton>
            </>
          )}
          {/* <BlogNavButton>
            <PiBellThin className="text-2xl" />
          </BlogNavButton> */}
        </div>
      )}
      {!isAuthenticated && <ProfileIcon className="hidden sm:flex" show = {showMenu} fn= {setShowMenu} />}
      {isAuthenticated && <ProfileIcon show = {showMenu} fn= {setShowMenu}/>}
    </nav>
  );
};

export default BlogNavLinks;
