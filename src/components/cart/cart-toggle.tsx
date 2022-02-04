"use client";

import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CiShoppingCart } from "react-icons/ci";
import CartDetails from "./cart-details";
import CartEmpty from "./cart-empty";

export default function CartToggle() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <CiShoppingCart size={24} onClick={toggleCart} />

      <div
        className={`fixed bg-black w-2/4 bg-opacity-30 z-50 max-w-xs  top-0 bottom-0 transition-all duration-500 ease-in-out ${
          isCartOpen ? "right-0" : "-right-[50%]"
        }`}
      >
        <div className="bg-white h-full  right-0 top-0 shadow-lg ">
          <div className="flex flex-col gap-4 p-4">
            <div onClick={toggleCart} className="cursor-pointer">
              <AiOutlineClose size={24} />
            </div>
            <CartEmpty />
            <CartDetails />
          </div>
        </div>
      </div>
    </>
  );
}
