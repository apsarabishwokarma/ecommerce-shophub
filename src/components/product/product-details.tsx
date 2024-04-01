"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Button from "../ui/button";

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

type ProductDetailsProps = {
  productId: string;
};

export default function ProductDetails({ productId }: ProductDetailsProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const json = await res.json();
        setProduct(json);
      } catch (e) {
        console.log("error");
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-6 ">
      <div className="flex md:gap-20 gap-4 md:flex-row flex-col py-8 justify-center">
        <figure className="aspect-square md:max-w-xl w-full">
          <Image
            src={product.image}
            alt={product.title}
            height={900}
            width={900}
            className="object-cover w-full border rounded-sm"
            quality={100}
          />
        </figure>
        <div className="flex flex-col md:gap-4 w-full">
          <h2 className="text-gray-600 font-bold text-2xl">{product.title}</h2>
          <p className="text-gray-600 font-bold text-xl">
            Price: ${product.price}
          </p>
          <p className="font-semibold">
            <span>Availability: </span>
            <span className="text-green-500 ">In Stock</span>{" "}
          </p>
          <p>{product.description}</p>
          <div className="text-gray-600">
            {product.rating.rate}{" "}
            <FaStar className="fill-yellow-400 inline mr-2" /> by{" "}
            {product.rating.count} users
          </div>
          <Button variant="outlined">Add to cart</Button>
        </div>
      </div>
    </div>
  );
}
