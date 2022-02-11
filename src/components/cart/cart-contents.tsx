"use client";

import Image from "next/image";
import Link from "next/link";
import { AiOutlineDelete } from "react-icons/ai";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { useCart } from "./cart-context";

function CartContent() {
  const {
    cartItems,
    removeItemFromCart,
    totalPrice,
    incrementQty,
    decrementQty,
  } = useCart();

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="p-4 divide-y">
        {cartItems.map(({ id, title, image, price, itemQuantity }) => (
          <div key={id} className="flex items-center gap-4 border-b py-4">
            <Link href={`/product/${id}`} className="w-16 h-16">
              <Image
                src={image}
                alt={title}
                width={80}
                height={80}
                className="rounded object-cover"
                quality={100}
              />
            </Link>

            <div className="flex-1">
              <Link
                href={`/product/${id}`}
                className="text-sm font-semibold text-gray-800 hover:underline"
              >
                {title}
              </Link>
              <p className="text-sm text-gray-500 mt-1">Price: ${price}</p>
            </div>
            <div className="flex gap-1">
              <p className="text-sm text-gray-700 font-medium">
                Qty: {itemQuantity}
              </p>
              <div className="flex-col gap-1">
                <button
                  onClick={() => {
                    incrementQty(id);
                  }}
                >
                  <TiArrowSortedUp />
                </button>
                <button
                  onClick={() => {
                    decrementQty(id);
                  }}
                >
                  <TiArrowSortedDown />
                </button>
              </div>
            </div>
            <button
              onClick={() => removeItemFromCart(id)}
              aria-label={`Remove ${title}`}
              className="text-red-600 hover:text-red-800"
            >
              <AiOutlineDelete size={20} />
            </button>
          </div>
        ))}
      </div>
      <div>
        <h3>Total price:{totalPrice}</h3>
      </div>
    </div>
  );
}

export default CartContent;
