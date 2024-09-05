import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
  return (
    <>
      <div className="flex max-w-2xl w-full flex-1 items-center border border-gray-300 px-4 rounded-full">
        <input
          placeholder="Search product"
          className="flex-1 border-r px-4 py-2 focus:outline-none "
        />
        <button className="flex items-center px-4 py-2 ">
          <CiSearch className="mr-2" />
          Search
        </button>
      </div>
    </>
  );
}
