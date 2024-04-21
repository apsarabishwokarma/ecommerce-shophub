"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { CiMenuBurger, CiSearch, CiShoppingCart } from "react-icons/ci";
import Collections from "./collections";
import SearchBar from "./search-bar";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <header className="bg-white">
      <div className=" container mx-auto px-6 sm:hidden flex justify-between items-center py-6">
        <div className="flex items-center gap-4 w-full justify-between">
          <Link href="/">
            <h2 className=" flex font-bold mr-2 ">
              ShopHub <AiOutlineShopping size={20} />
            </h2>
          </Link>
          <div className="flex  gap-4 items-center">
            <CiSearch size={24} />
            <Link href="/cart">
              <CiShoppingCart size={24} />
            </Link>
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
          <Link href="/cart">
            <CiShoppingCart size={20} />
          </Link>
          <div className="h-4 w-[1px] bg-black"></div>
          <Link href="/login">
            <p>Login</p>
          </Link>
          <Link href="/signup">
            <p>Signup</p>
          </Link>
        </div>
      </div>
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-50">
          <div className="bg-white w-2/4 h-2/4 fixed right-0 top-0 shadow-lg">
            {/* Drawer Items */}
            <div className="flex flex-col gap-4 p-4">
              <Link href="/categories">
                <p>Categories</p>
              </Link>

              <Link href="/login">
                <p>Login</p>
              </Link>
              <Link href="/signup">
                <p>Signup</p>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
