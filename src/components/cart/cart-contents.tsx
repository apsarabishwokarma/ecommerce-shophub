"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "./cart-context";

function CartContent() {
  // const { totalQuantity } = useContext(CartContext);
  const { cartItems } = useCart();

  return (
    <div className="container mx-auto ">
      <div className="flex items-center justify-between border-b pb-4 mb-4">
        <div className="text-gray-600 w-8">1</div>
        {cartItems?.map(({ id, title, image, price, description }) => (
          <Link href={`/product/${id}`} key={id} className="">
            <figure className="">
              <Image
                src={image}
                alt={title}
                height={16}
                width={16}
                className="w-full h-full object-cover"
                quality={100}
              />
            </figure>
            <div className="flex-1 pl-4">
              <div className="text-lg font-medium text-gray-700">{title}</div>
              <div className="text-sm text-gray-500">Price: ${price}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CartContent;
