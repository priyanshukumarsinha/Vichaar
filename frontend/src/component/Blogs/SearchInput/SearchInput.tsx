import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  return (
    <div className="pl-3 bg-gray-50 rounded-full hidden gap-2 items-center justify-center py-1 md:flex">
      <CiSearch className="text-2xl opacity-60" />
      <input
        type="text"
        placeholder="Search"
        className="border border-none px-2 py-1 rounded-full bg-gray-50 text-sm font-medium outline-none"
      />
    </div>
  );
};

export default SearchInput;
