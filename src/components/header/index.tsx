import { AiOutlineShopping } from "react-icons/ai";

import Collections from "./collections";
import SearchBar from "./search-bar";

export default function Header() {
  return (
    <>
      <div className="bg-white flex text-black justify-between items-center gap-2 px-4 py-4">
        <h2 className="font-bold">ShopHub</h2>
        <Collections />
        <SearchBar />
        <div className="flex items-center gap-2">
          <AiOutlineShopping size={20} />
          <div className="h-4 w-[1px] bg-black"></div>
          <p>Login</p>
          <p>Signup</p>
        </div>
      </div>
    </>
  );
}
