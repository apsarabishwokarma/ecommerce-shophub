"use client";
import { createContext, ReactNode, useContext, useState } from "react";

//const CounterContext = createContext();
// const CounterContext = createContext<CounterContextType | undefined>(undefined);
// const CounterContext = createContext({ count: 0, totalCounter: () => {} });

// Creating Context
const CartContext = createContext<
  { count: number; totalCounter: () => void } | undefined
>(undefined);

// Creating Provider
export default function CartProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);

  const totalCounter = () => setCount((prev) => prev + 1);

  return (
    <CartContext.Provider value={{ count, totalCounter }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom Hook for Consuming the Context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
