import { useState } from "react";
import BlogNavbar from "../Blogs/Navbar/BlogNavbar";
import BlogDesc from "../AllBlogs/BlogDesc";
import { Link } from "react-router-dom";
import EmailModal from "./EmailModel";
import UsernameModal from "./UsernameModal";
import DeleteAccountModal from "./DeleteAccountModal";
import ProfileModal from "./ProfileModal";
import ProfileSidebar from "./ProfileSidebar";
import ProfileSettings from "./ProfileSettings";
import ProfileTabs from "./ProfileTabs";
import blogData from "../../data/blogData.json"

const Profile = () => {
  const currentUserId = "1";
  const userId = "1";

  const isAdmin = currentUserId === userId;
  
  const [isShowHome, setIsShowHome] = useState(true);

  const [showEmail, setShowEmail] = useState(false);
  const [showUsername, setShowUsername] = useState(false);
  // const [showChangePassword, setShowChangePassword] = useState(false);
  const [showProfileChange, setShowProfileChange] = useState(false);
  const [deleteAccount, setDeleteAccount] = useState(false);
  
  return (
    <div className="min-h-screen">
      <BlogNavbar />
      <div className=" flex">
        <div className="w-full lg:w-[65%] h-screen px-5 sm:px-10 md:px-20 lg:px-25 xl:px-40">
          <p
          className="text-4xl font-bold my-12"
          >Priyanshu Kumar Sinha</p>

          <ProfileTabs isShowHome={isShowHome} setIsShowHome={setIsShowHome} isAdmin={isAdmin} />

          {
            isShowHome ? (
              <div>
        {blogData.length > 0 && (
          <>
            {blogData.map((blog) => (
              <Link to={`/blog/${blog.id}`} key={blog.id}>
                <BlogDesc
                  authorName={blog.authorName}
                  authorImg={blog.authorImg}
                  blogImg={blog.blogImg}
                  heading={blog.heading}
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
      email="priyanshuk9066@gmail.com"
      username="priyanshuk"
      onEmailClick={() => setShowEmail(true)}
      onUsernameClick={() => setShowUsername(true)}
      onProfileChangeClick={() => setShowProfileChange(true)}
      onDeleteAccountClick={() => setDeleteAccount(true)}
    />
              </>
            )
          }


          {
            showEmail && <EmailModal fn= {setShowEmail}/>
          }
          {
            showUsername && <UsernameModal fn= {setShowUsername} />
          }
          {
            deleteAccount && <DeleteAccountModal fn= {setDeleteAccount} />
          }
          {
            showProfileChange && <ProfileModal fn={setShowProfileChange}/>
          }

          
        </div>

        <ProfileSidebar isAdmin={isAdmin} fn={setIsShowHome} />
      </div>
    </div>
  );
};

export default Profile;
