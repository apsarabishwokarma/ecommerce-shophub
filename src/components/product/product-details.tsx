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
    <>
      <div className="flex md:gap-40 gap-4  flex-wrap py-8 px-8 justify-center ">
        <figure className="aspect-square">
          <Image
            src={product.image}
            alt={product.title}
            height={300}
            width={300}
            className="object-cover"
            quality={100}
          />
        </figure>
        <div className="flex flex-col md:gap-4">
          <h2 className="text-gray-600 font-bold text-2xl">{product.title}</h2>
          <p>{product.description}</p>
          <p className="text-gray-600 font-semibold">Price: ${product.price}</p>
          <div className="text-gray-600">
            {product.rating.rate}{" "}
            <FaStar className="fill-yellow-400 inline mr-2" /> by{" "}
            {product.rating.count} users
          </div>
        </div>
      </div>
    </>
  );
}
