"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BsCollection } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

export default function Collections() {
  const [collection, setCollection] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getCollection() {
      // fetch('https://fakestoreapi.com/products/categories')
      //         .then(res=>res.json())
      //         .then(json=>console.log(json))

      try {
        const res = await fetch("https://fakestoreapi.com/products/categories");
        const json = await res.json();
        setCollection(json);
      } catch (e) {
        console.log("error");
      } finally {
        setIsLoading(false);
      }
    }
    getCollection();
  }, []);

  return (
    <section className="hidden lg:flex cursor-pointer items-center space-x-2 rounded-sm hover:bg-slate-100 px-2 py-3 group relative">
      <BsCollection className="text-black w-4" />
      <div className="mr-1 text-sm font-medium text-[#202223]">Categories</div>
      <IoIosArrowDown className="group-hover:rotate-180 transition-transform w-4" />
      <div className="absolute top-full z-50 group-hover:block hidden w-52 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <ul className="p-1">
          {isLoading ? "Loading..." : ""}
          {collection?.map((c) => (
            <li
              className="relative hover:bg-slate-100 rounded-md text-sm hover:bg-primary-50"
              key={c}
            >
              <div>
                <Link
                  className="font-semibold text-gray-900 block px-2 py-2"
                  href={`/collections/${c.replaceAll(" ", "-")}`}
                >
                  {c}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
