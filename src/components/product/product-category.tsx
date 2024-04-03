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
          `https://fakestoreapi.com/products/catergory/${category}`
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
  }, [ProductCategory]);

  if (!category) {
    return <div>Loading.....</div>;
  }

  return <div></div>;
}
