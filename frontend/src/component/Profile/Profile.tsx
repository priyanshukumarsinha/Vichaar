import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../../constant";
import BlogNavbar from "../Blogs/Navbar/BlogNavbar";
import BlogDesc from "../AllBlogs/BlogDesc";
import ProfileSidebar from "./ProfileSidebar";
import ProfileSettings from "./ProfileSettings";
import ProfileTabs from "./ProfileTabs";
import EmailModal from "./EmailModel";
import UsernameModal from "./UsernameModal";
import DeleteAccountModal from "./DeleteAccountModal";
import ProfileModal from "./ProfileModal";
import ChangePasswordModal from "./ChangePasswordModal";
import { useIsAuthStore } from "../../store/isAuthState";
import { useRef } from "react";
import NotFound from "../NotFound";

interface Blog {
  id: string;
  authorName: string;
  authorImg: string;
  blogImg: string;
  title: string;
  isBookMarked: boolean;
  likeCount: string;
  publishDate: string;
  readTime: string;
  subHeading: string;
}

const Profile = () => {
  const location = useLocation();
  const userStore = useIsAuthStore((state) => state.user);
  const [user, setUser] = useState(userStore);
  const [blogData, setBlogData] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  const isSelf = location.pathname === "/me" || location.pathname === "/u/";
  const currentUserId = user?.id || "";
  const [isAdmin, setIsAdmin] = useState(isSelf);

  const [isShowHome, setIsShowHome] = useState(true);

  const [showEmail, setShowEmail] = useState(false);
  const [showUsername, setShowUsername] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showProfileChange, setShowProfileChange] = useState(false);
  const [deleteAccount, setDeleteAccount] = useState(false);

  const [error, setError] = useState("");

  const isAdminSet = useRef(false); // Prevents multiple updates

  useEffect(() => {
    setUser(userStore);
  }, [showEmail, showUsername, showChangePassword, showProfileChange]);

  useEffect(() => {
    setError("");
    if (!isSelf) {
      const username = location.pathname.split("/")[2] || "me";
      axios
        .post(`${BACKEND_URL}/user/u/${username}`)
        .then((res) => {
          const fetchedUser = res.data.data.user;
          setUser(fetchedUser);

          // Set isAdmin only once
          if (!isAdminSet.current) {
            setIsAdmin(fetchedUser.id === currentUserId);
            isAdminSet.current = true; // Lock further updates
          }
        })
        .catch((error) => {
          console.log(error);
          setError("User not found");
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    setError("");
    if (user?.username) {
      setLoading(true);
      axios
        .get(`${BACKEND_URL}/blog/u/${user.username}`)
        .then((res) => setBlogData(res.data.data.blogs))
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [user]);

  if (error) {
    return <NotFound message={error} />;
  }

  return (
    <div className="min-h-screen">
      <BlogNavbar />
      {loading ? (
        <div className="flex justify-center items-center h-96">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="flex">
          <div className="w-full lg:w-[65%] h-screen px-5 sm:px-10 md:px-20 lg:px-25 xl:px-40">
            <p className="text-4xl font-bold my-12">{user?.name}</p>

            {isAdmin && (
              <ProfileTabs
                isShowHome={isShowHome}
                setIsShowHome={setIsShowHome}
              />
            )}

            {isShowHome ? (
              <div>
                {blogData.length > 0 ? (
                  blogData.map((blog) => (
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
                  ))
                ) : (
                  <p className="h-[60vh] my-5 flex justify-center items-center bg-gray-100">
                    <img
                      src="https://static.tildacdn.net/tild3265-6337-4139-a339-323832653339/404.svg"
                      alt="No Blogs Found"
                      className="w-full"
                    />
                  </p>
                )}
              </div>
            ) : (
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
            findingUser={user || {}}
          />
        </div>
      )}
    </div>
  );
};

export default Profile;
