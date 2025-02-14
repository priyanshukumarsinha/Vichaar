import BlogNavButton from "../Navbar/BlogNavButton";

const Tags = ({ name }: { name: string }) => {
  return (
    <BlogNavButton className="bg-gray-100 font-normal opacity-100 my-10">
      {name}
    </BlogNavButton>
  );
};

export default Tags;
