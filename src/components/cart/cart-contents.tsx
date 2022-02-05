"use client";

import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

type CartContentProps = {
  data: Product[];
};

function CartContent({ data }: CartContentProps) {
  return (
    <div className="container mx-auto ">
      <div className="flex">
        {data?.map(({ id, title, image, price, description }) => (
          <Link href={`/product/${id}`} key={id} className="">
            <figure className="">
              <Image
                src={image}
                alt={title}
                height={30}
                width={30}
                className="rounded full"
                quality={100}
              />
            </figure>

            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-gray-500 text-sm ">{description}</p>
            <p className="text-gray-800 font-bold">${price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CartContent;
