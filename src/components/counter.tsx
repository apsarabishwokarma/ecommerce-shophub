"use client";

import { useEffect, useState } from "react";

let value = 0;

function Counter() {
  const [count, setCount] = useState(0);
  const productId = 1;

  useEffect(() => {
    console.log("run after elements are rendered");
    const doc = document.getElementById("counter");
    console.log(doc);
  }, []);

  useEffect(() => {
    console.log("count changed");
    console.log(count);
    console.log(`value: ${value}`);
  }, [count]);

  useEffect(() => {
    async function getData() {
      const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const json = await res.json();
      console.log(json);
    }

    getData();
  }, []);

  console.log("executed again");

  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl font-bold" id="counter">
        Counter: {count}
      </h1>
      <button
        onClick={() => setCount(count + 1)}
        className="mt-4 px-4 py-2 bg-red"
      >
        Increment button
      </button>

      <h1 className="text-2xl font-bold" id="counter">
        Value: {value}
      </h1>
      <button
        onClick={() => {
          value = value + 1;
        }}
        className="mt-4 px-4 py-2 bg-red"
      >
        Increment button
      </button>
    </div>
  );
}

export default Counter;
