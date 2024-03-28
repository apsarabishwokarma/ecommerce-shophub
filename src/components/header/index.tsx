import { AiOutlineShopping } from "react-icons/ai";
import { TbCategory } from "react-icons/tb";
import SearchBar from "./search-bar";
export default function Header() {
  return (
    <>
      <div className="bg-white flex text-black justify-between items-center gap-2 px-4 py-4">
        <h2 className="font-bold">ShopHub</h2>
        <p className="flex items-center gap-1">
          <TbCategory /> category
          <select className="">
            <option value="furniture"> Furniture</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="books">Books</option>
          </select>
        </p>
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
