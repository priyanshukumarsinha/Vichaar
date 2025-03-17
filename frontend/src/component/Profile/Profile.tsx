import { useEffect, useState } from "react";
import BlogNavbar from "../Blogs/Navbar/BlogNavbar";
import BlogDesc from "../AllBlogs/BlogDesc";
import { Link, useLocation } from "react-router-dom";
import EmailModal from "./EmailModel";
import UsernameModal from "./UsernameModal";
import DeleteAccountModal from "./DeleteAccountModal";
import ProfileModal from "./ProfileModal";
import ProfileSidebar from "./ProfileSidebar";
import ProfileSettings from "./ProfileSettings";
import ProfileTabs from "./ProfileTabs";
import { useIsAuthStore, User } from "../../store/isAuthState";
import ChangePasswordModal from "./ChangePasswordModal";
import axios from "axios";
import { BACKEND_URL } from "../../constant";

const Profile = () => {
  const [blogData, setBlogData] = useState([]);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/me") {
      setIsShowHome(true);
      setLoading(false);
    } else {
      setIsShowHome(false);
    }
  }, [location]);

  const [isShowHome, setIsShowHome] = useState(location.pathname === "/me");

  const [showEmail, setShowEmail] = useState(false);
  const [showUsername, setShowUsername] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showProfileChange, setShowProfileChange] = useState(false);
  const [deleteAccount, setDeleteAccount] = useState(false);

  const [user, setUser] = useState(useIsAuthStore((state) => state.user));

  const currentUserId = user.id;

  const [findingUser, setFindingUser] = useState<User | null>(null);

  const isSelf = location.pathname === "/me" || location.pathname === "/u/";

  const [isAdmin, setIsAdmin] = useState(isSelf);

  const [loading, setLoading] = useState(isSelf);

  if (!isSelf) {
    const findingUsername = location.pathname.split("/")[2] || "me";

    useEffect(() => {
      findUser();
    }, [location.pathname]); // Ensure it triggers when pathname changes

    const findUser = async () => {
      console.log("yes");
      try {
        const response = await axios.post(
          `${BACKEND_URL}/user/u/${findingUsername}`
        );
        setFindingUser(response.data.data.user);
        setUser(response.data.data.user);
        setLoading(false); // Stop loading after the request
        setIsAdmin(findingUser?.id === currentUserId);
        setIsShowHome(true);
        console.log(isAdmin);
      } catch (error) {
        console.error("Error fetching user:", error);
        setLoading(false); // Stop loading in case of error
      }
    };
  }

  useEffect(() => {
    findUsersBlogs();
  }, []);

  const findUsersBlogs = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${BACKEND_URL}/blog/u/${user?.username}`
      );
      setBlogData(response.data.data.blogs);
    } catch (error) {
      console.error("Error fetching user's blogs:", error);
    }
    setLoading(false);
    
  };

  if (loading) {
    return <>loading ...</>;
  }

  return (
    <div className="min-h-screen">
      <BlogNavbar />
      <div className=" flex">
        <div className="w-full lg:w-[65%] h-screen px-5 sm:px-10 md:px-20 lg:px-25 xl:px-40">
          <p className="text-4xl font-bold my-12">{user?.name}</p>

          {isAdmin && (
            <ProfileTabs
              isShowHome={isShowHome}
              setIsShowHome={setIsShowHome}
              isAdmin={isAdmin}
            />
          )}
          {isShowHome ? (
            <div>
              {blogData.length > 0 && (
                <>
                  {blogData.map((blog) => (
                    <Link to={`/blog/${blog.id}`} key={blog.id}>
                      <BlogDesc
                        authorName={blog.authorName}
                        authorImg={blog.authorImg}
                        blogImg={blog.blogImg}
                        title={blog.title}
                        isBookMarked={blog.isBookMarked}
                        likeCount={blog.likeCount}
                        publishDate={blog.publishDate}
                        readTime={blog.readTime}
                        subHeading={blog.subHeading}
                      />
                    </Link>
                  ))}
                </>
              )}
            </div>
          ) : (
            <>
              <ProfileSettings
                email={user?.email || ""}
                username={user?.username || ""}
                name={user?.name || ""}
                onEmailClick={() => setShowEmail(true)}
                onUsernameClick={() => setShowUsername(true)}
                onProfileChangeClick={() => setShowProfileChange(true)}
                onDeleteAccountClick={() => setDeleteAccount(true)}
                onChangePasswordClick={() => setShowChangePassword(true)}
              />
            </>
          )}

          {showEmail && <EmailModal fn={setShowEmail} />}
          {showUsername && <UsernameModal fn={setShowUsername} />}
          {deleteAccount && <DeleteAccountModal fn={setDeleteAccount} />}
          {showProfileChange && <ProfileModal fn={setShowProfileChange} />}
          {showChangePassword && (
            <ChangePasswordModal fn={setShowChangePassword} />
          )}
        </div>

        <ProfileSidebar
          isAdmin={isAdmin}
          fn={setIsShowHome}
          findingUser={findingUser || {}}
        />
      </div>
    </div>
  );
};

export default Profile;
