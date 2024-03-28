import Link from "next/link";
import { FaRegUser } from "react-icons/fa6";
import SearchBar from "./search-bar";

export default function Header() {
  return (
    <>
      <div className="bg-white flex text-black justify-between items-center px-4 py-4">
        <h2 className="font-bold">ShopHub</h2>
        <div className="flex items-center gap-2 m-4">
          {navItems.map(({ title, link }) => (
            <Link href={link}>{title}</Link>
          ))}
        </div>
        <SearchBar />
        <div className="flex">
          <p className="flex item center">
            <FaRegUser />
            login
          </p>
          <p>/</p>
          <p>Signup</p>
        </div>
      </div>
    </>
  );
}

const navItems = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
];
