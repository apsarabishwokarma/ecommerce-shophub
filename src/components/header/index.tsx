import { MdOutlineShoppingCart } from "react-icons/md";

import { CiMenuBurger, CiSearch, CiShoppingCart } from "react-icons/ci";
import Collections from "./collections";
import SearchBar from "./search-bar";

export default function Header() {
  return (
    <header className="bg-white">
      <div className=" container mx-auto px-6 sm:hidden flex justify-between items-center py-6">
        <div className="flex items-center gap-4 w-full justify-between">
          <h2 className="font-bold">ShopHub</h2>
          <div className="flex  gap-4 items-center">
            <CiSearch size={24} />
            <CiShoppingCart size={24} />
            <CiMenuBurger size={24} />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 sm:flex hidden text-black justify-between items-center gap-2 py-4">
        <div className="flex items-center gap-4 w-full">
          <h2 className="font-bold">ShopHub</h2>
          <Collections />
          <SearchBar />
        </div>
        <div className="flex items-center gap-4">
          <MdOutlineShoppingCart size={20} />
          <div className="h-4 w-[1px] bg-black"></div>
          <p>Login</p>
          <p>Signup</p>
        </div>
      </div>
    </header>
  );
}
