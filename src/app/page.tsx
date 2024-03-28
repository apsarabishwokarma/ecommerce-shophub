"use client";

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

const Home = () => {
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
    <div>
      {isLoading ? "Loading...." : "Done"}
      {data?.map(({ id, title }) => (
        <div>{title}</div>
      ))}
      <br />
    </div>
  );
};

export default Home;
