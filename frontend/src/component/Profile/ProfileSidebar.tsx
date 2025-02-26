import { useIsAuthStore } from "../../store/isAuthState";
import BlogNavButton from "../Blogs/Navbar/BlogNavButton";
import ProfileImage from "../ui/ProfileImage";

const ProfileSidebar = ({ isAdmin, fn }: {isAdmin:boolean, fn:Function}) => {
    const user = useIsAuthStore((state) => state.user);
    return (
      <div className="hidden lg:flex lg:w-[35%] border-l border-gray-200 h-screen p-12 flex-col gap-5">
        <ProfileImage className="w-20 h-20 text-4xl" />
        <p className="text-md font-medium">
          {user?.name}
        </p>
        {isAdmin ? (
          <p
            className="text-xs text-blue-500 font-medium cursor-pointer"
            onClick={() => fn(false)}
          >
            Edit Profile
          </p>
        ) : (
          <BlogNavButton
            className="bg-green-800 text-white text-sm opacity-80 w-20"
            onClick={() => {}}
          >
            Follow
          </BlogNavButton>
        )}
      </div>
    );
  };


export default ProfileSidebar
  