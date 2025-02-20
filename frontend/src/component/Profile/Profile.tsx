import BlogNavbar from "../Blogs/Navbar/BlogNavbar";

const Profile = () => {
  return (
    <div className="min-h-screen">
      <BlogNavbar />
      <div className=" flex">
        <div className="w-full lg:w-[65%] h-screen bg-green-400 border"></div>
        <div className="hidden lg:flex lg:w-[35%] bg-yellow-300 h-screen"></div>
      </div>
    </div>
  );
};

export default Profile;
