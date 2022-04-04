"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiSortDown, BiSortUp } from "react-icons/bi";
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
  const [sort, setSort] = useState<"asc" | "desc">("asc");

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
              )}?limit=${limit}&sort=${sort}`
            : `https://fakestoreapi.com/products?limit=${limit}&sort=${sort}`
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
  }, [category, limit, sort]);

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
        <div
          className="flex items-center group mb-4 cursor-pointer max-w-max"
          onClick={() => setSort((prev) => (prev === "asc" ? "desc" : "asc"))}
        >
          <div className="mr-1 text-sm font-medium text-black">Sort By :</div>
          {sort === "asc" ? (
            <BiSortUp className="w-4 h-4" />
          ) : (
            <BiSortDown className="w-4 h-4" />
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {
            // isLoading ? (
            //   <div>Loading....</div>
            // ) : (
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
            // )
          }
        </div>
      </div>
    </>
  );
};

export default ProductGrid;
