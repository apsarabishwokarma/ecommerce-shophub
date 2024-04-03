"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

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

type ProductCategoryProps = {
  productCategory: string;
};

export default function ProductCategory({
  productCategory,
}: ProductCategoryProps) {
  const [category, setCategory] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getCategory() {
      try {
        const res = await fetch(
          `https://fakestoreapi.com/products/category/${productCategory.replaceAll(
            "-",
            " "
          )}`
        );
        const json = await res.json();
        setCategory(json);
      } catch (e) {
        console.log("error");
      } finally {
        setIsLoading(false);
      }
    }
    getCategory();
  }, [productCategory]);

  if (isLoading) {
    return <div>Loading.....</div>;
  }

  return (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {category.map(({ id, title, image, price, rating }) => (
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
              {rating.rate} <FaStar className="fill-yellow-400 inline mr-2" />{" "}
              by {rating.count} users
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
