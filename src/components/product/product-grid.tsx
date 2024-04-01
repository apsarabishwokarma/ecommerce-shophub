"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";

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

const ProductGrid = () => {
  const [data, setData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // function getData() {
    //   fetch("https://fakestoreapi.com/products")
    //     .then((res) => res.json())
    //     .then((json) => {
    //       setData(json);
    //       setIsLoading(false);
    //     }).catch((e)=>{});
    //   console.log("run");
    // }
    // alternative code

    async function getData() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const json = await res.json();
        setData(json);
      } catch (e) {
        console.log("error");
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, []);

  return (
    <>
      <div className="bg-white text-black container mx-auto px-6">
        <div className=" flex flex-col  gap-4 py-20 justify-center items-center text-center">
          <p className="font-medium text-base">Featured Products</p>
          <h1 className="font-bold text-3xl">BEST SELLER PRODUCTS</h1>
          <p className="font-medium text-lg">
            Discover, click, and shop, Just a click away from your next
            purchase.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {isLoading ? (
            <div>Loading....</div>
          ) : (
            data.map(({ id, title, image, price, rating }) => (
              <Link
                href={`/product/${id}`}
                key={id}
                className="bg-white p-4 rounded-md border hover:shadow-md block"
              >
                <div className="cursor-pointer">
                  <figure className="aspect-square">
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-contain"
                    />
                  </figure>
                  <div className="m-3 text-gray-600">{title}</div>
                  <div className="text-gray-600">${price}</div>
                  <div className="text-gray-600">
                    {rating.rate}{" "}
                    <FaStar className="fill-yellow-400 inline mr-2" /> by{" "}
                    {rating.count} users
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default ProductGrid;
