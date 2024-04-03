"use client";

import Image from "next/image";
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

const ProductGrid = ({
  category,
  title,
  subtitle,
  heading,
  limit,
}: {
  category?: string;
  title?: string;
  subtitle?: string;
  heading?: string;
  limit?: number;
}) => {
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
        const res = await fetch(
          category
            ? `https://fakestoreapi.com/products/category/${category.replaceAll(
                "-",
                " "
              )}?limit=${limit}`
            : `https://fakestoreapi.com/products?limit=${limit}`
        );
        const json = await res.json();
        setData(json);
      } catch (e) {
        console.log("error");
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [category, limit]);

  return (
    <>
      <div className="bg-white text-black container mx-auto px-6">
        <div className=" flex flex-col  gap-4 py-20 justify-center items-center text-center">
          {heading && (
            <p className="font-medium text-base uppercase">{heading}</p>
          )}
          {title && <h1 className="font-bold text-3xl capitalize">{title}</h1>}
          {subtitle && <p className="font-medium text-lg">{subtitle}</p>}
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
                    <Image
                      src={image}
                      alt={title}
                      width={500}
                      height={500}
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
