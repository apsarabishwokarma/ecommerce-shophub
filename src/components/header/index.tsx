"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineShopping } from "react-icons/ai";
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import CartToggle from "../cart/cart-toggle";
import Collections from "./collections";
import SearchBar from "./search-bar";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (isDrawerOpen) {
      body?.classList.add("overflow-hidden");
    } else {
      body?.classList.remove("overflow-hidden");
    }
  }, [isDrawerOpen]);

  // const classList = ["container", "mx-auto"];

  return (
    <header className="bg-white">
      <div className="container mx-auto px-6 sm:hidden flex justify-between items-center py-6">
        <div className="flex items-center gap-4 w-full justify-between">
          <Link href="/">
            <h2 className=" flex font-bold mr-2 ">
              ShopHub <AiOutlineShopping size={20} />
            </h2>
          </Link>
          <div className="flex  gap-4 items-center">
            <CiSearch size={24} />

            <CartToggle />

            <CiMenuBurger size={24} onClick={toggleDrawer} />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 sm:flex hidden text-black justify-between items-center gap-2 py-4">
        <div className="flex items-center gap-4 w-full">
          <Link href="/">
            <h2 className=" flex font-bold mr-2 ">
              ShopHub <AiOutlineShopping size={20} />
            </h2>
          </Link>
          <Collections />
          <SearchBar />
        </div>

        <div className="flex items-center gap-4">
          <CartToggle />
          <div className="h-4 w-[1px] bg-black"></div>
          <Link href="/login">
            <p>Login</p>
          </Link>
          <Link href="/signup">
            <p>Signup</p>
          </Link>
        </div>
      </div>
      <div
        className={`fixed bg-black w-2/4 bg-opacity-30 z-50 top-0 bottom-0 transition-all duration-500 ease-in-out ${
          isDrawerOpen ? "right-0" : "-right-[50%]"
        }`}
      >
        <div className="bg-white h-full  right-0 top-0 shadow-lg ">
          <div className="flex flex-col gap-4 p-4">
            <div onClick={toggleDrawer} className="cursor-pointer">
              <AiOutlineClose size={24} />
            </div>

            <Link href="/categories">
              <p>Categories</p>
            </Link>
            <Link href="/login" onClick={() => setIsDrawerOpen(false)}>
              <p>Login</p>
            </Link>
            <Link href="/signup" onClick={() => setIsDrawerOpen(false)}>
              <p>Signup</p>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
