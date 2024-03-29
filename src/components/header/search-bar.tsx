import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
  return (
    <>
      {/* <section className="flex-1 md:pr-8 lg:block hidden">
        <form method="get" action="/search" className="flex h-10 w-full group">
          <input
            type="search"
            name="q"
            placeholder="What's on your mind today?"
            className="w-full rounded-l-full border border-r-0 border-subdued peer focus:border-black px-4 text-sm focus:ring-0"
            value=""
          />
          <button
            type="submit"
            className="flex h-10 items-center space-x-3 rounded-r-full border border-subdued peer-focus:border-black px-4 text-brand"
          >
            <CiSearch className="mr-2" />
            <div>Search</div>
          </button>
        </form>
      </section> */}

      <div className="flex flex-1 items-center border border-gray-300 px-4 rounded-full m-4 ">
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
