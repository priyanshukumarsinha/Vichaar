import { useState } from "react";
import BlogNavbar from "../Blogs/Navbar/BlogNavbar";
import BlogNavButton from "../Blogs/Navbar/BlogNavButton";
import ProfileImage from "../ui/ProfileImage";
import BlogDesc from "../AllBlogs/BlogDesc";
import { Link } from "react-router-dom";

const Profile = () => {
  const currentUserId = "1";
  const userId = "1";

  const isAdmin = currentUserId === userId;
  
  const [isShowHome, setIsShowHome] = useState(true);

  const blogData = [
    {
      id: 1,
      authorName: "Priyanshu Kumar Sinha",
      authorImg: "",
      blogImg:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*Nbd2cZ8F-qN5EdCDLzQUNQ.png",
      heading: "How Much YouTube Paid Me For 320 Shorts in 3 Months",
      isBookMarked: false,
      likeCount: "100",
      publishDate: "Oct 1, 2021",
      readTime: "5",
      subHeading:
        "In the first part, I will briefly describe my career for the context. In the second part, I will go through.",
      link: "https://www.google.com",
    },
    {
      id: 2,
      authorName: "Sneha R",
      authorImg:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*5-m-7RBfW6YnEPIwTHJvPw.jpeg",
      blogImg:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*5-m-7RBfW6YnEPIwTHJvPw.jpeg",
      heading: "How to Learn Full Stack Development in 2024",
      isBookMarked: false,
      likeCount: "100",
      publishDate: "Oct 1, 2021",
      readTime: "3",
      subHeading:
        "In the first part, I will briefly describe my career for the context. In the second part, I will go through.",
      link: "https://www.vichaar.live",
    },
  ];

  return (
    <div className="min-h-screen">
      <BlogNavbar />
      <div className=" flex">
        <div className="w-full lg:w-[65%] h-screen px-5 sm:px-10 md:px-20 lg:px-25 xl:px-40 py-12">
          <p
          className="text-4xl font-bold my-12"
          >Priyanshu Kumar Sinha</p>

          <ul className="flex gap-10 border-b-1 border-gray-200">
            <li className={`${isShowHome? 'border-b-1' : 'border-0'} cursor-pointer pb-3`}
            onClick={() => setIsShowHome(true)}
            >Home</li>
            {
              isAdmin && (
                <li className={`${!isShowHome ? 'border-b-1' : 'border-0'} cursor-pointer pb-3`}
            onClick={() => setIsShowHome(false)}
            >Settings</li>
              )
            }
          </ul>

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
                        <div className="py-10 flex flex-col gap-7 border-b-1 border-gray-200">
            <div className="flex justify-between text-sm">
              <p className="font-medium">
                Email address
              </p>
              <p className="opacity-60 hover:opacity-100">
                priyanshuk9066@gmail.com
              </p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="font-medium">
                Username
              </p>
              <p className="opacity-60 hover:opacity-100">
                priyanshuk
              </p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="font-medium">
                Profile Information
              </p>
              <p className="opacity-60 hover:opacity-100 flex gap-2 items-center">
                priyanshuk
                <ProfileImage className="w-6 h-6 text-xs" />
              </p>
            </div>
          </div>

          <div className="py-10 flex flex-col gap-7 border-b-1 border-gray-200">
            <div className="flex justify-between text-sm">
              <p className="font-medium">
                Change Password
              </p>
              <p className="opacity-60 hover:opacity-100">
                ***********
              </p>
            </div>
          </div>

          <div className="py-10 flex flex-col gap-7 border-b-1 border-gray-200">
            <div className="flex flex-col gap-2 text-sm">
              <p className="font-medium text-red-500">
                Delete Account
              </p>
              <p className="opacity-60 hover:opacity-100">
              Permanently delete your account and all of your content.
              </p>
            </div>
          </div>
              </>
            )
          }


          
        </div>

        <div className="hidden lg:flex lg:w-[35%]  border-l-1 border-gray-200 h-screen p-12  flex-col gap-5">
          <ProfileImage className="w-20 h-20 text-4xl" />
          <p className="text-md font-medium">
            Priyanshu Kumar Sinha
          </p>
          {
            isAdmin ? (
            <p className="text-xs text-blue-500 font-medium cursor-pointer"
            onClick={() => setIsShowHome(false)}
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
            )
          }

        </div>
      </div>
    </div>
  );
};

export default Profile;
