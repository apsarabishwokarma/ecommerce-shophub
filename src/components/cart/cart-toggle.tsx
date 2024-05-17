"use client";

import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CiShoppingCart } from "react-icons/ci";

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
            <div className="flex flex-col gap-10 container mx-auto px-6 ">
              <div className="items-center justify-center text-xl text-gray-400">
                Your cart is empty !
              </div>

              <div className="items-center justify-center text-lg text-gray-500">
                Looks like you haven't added anything to your cart yet.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
