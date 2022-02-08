"use client";

import Image from "next/image";
import Link from "next/link";
import { AiOutlineDelete } from "react-icons/ai";
import { useCart } from "./cart-context";

function CartContent() {
  const { cartItems, setCartItems } = useCart();
  // Function to handle removing an item from the cart
  const removeItem = (idToRemove: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== idToRemove)
    );
  };

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="p-4 max-h-64 bg-gray-200">
      {cartItems.map(({ id, title, image, price, itemQuantity }) => (
        <div key={id} className="flex items-center gap-4 border-b pb-4">
          <Link href={`/product/${id}`} className="w-16 h-16">
            <Image
              src={image}
              alt={title}
              width={60}
              height={60}
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

          <p className="text-sm text-gray-700 font-medium">
            Qty:{itemQuantity}
          </p>
          <button
            onClick={() => removeItem(id)}
            aria-label={`Remove ${title}`}
            className="text-red-600 hover:text-red-800"
          >
            <AiOutlineDelete size={20} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default CartContent;
