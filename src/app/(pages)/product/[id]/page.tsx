"use client";

import ProductDetails from "@/components/product/product-details";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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

export default function ProductDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!params.id) {
      router.push("/");
      return;
    }

    async function getProduct() {
      try {
        const res = await fetch(
          `https://fakestoreapi.com/products/${params.id}`,
        );

        if (!res.ok) {
          throw new Error(`Failed to fetch product: ${res.status}`);
        }

        const contentType = res.headers.get("content-type") || "";
        if (!contentType.includes("application/json")) {
          throw new Error("Unexpected non-JSON response from product API");
        }

        const json = (await res.json()) as Product;
        setProduct(json);
      } catch (error) {
        console.error(error);
        setProduct(null);
      } finally {
        setIsLoading(false);
      }
    }

    getProduct();
  }, [params.id, router]);

  if (isLoading) {
    return <div className="container mx-auto px-6 py-10">Loading...</div>;
  }

  if (!product) {
    return (
      <div className="container mx-auto px-6 py-10">
        Failed to load product details.
      </div>
    );
  }

  return <ProductDetails product={product} />;
}
