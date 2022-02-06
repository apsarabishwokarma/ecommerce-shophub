"use client";
import { createContext, ReactNode, useContext, useState } from "react";

type CartItem = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
};

//const CounterContext = createContext();
// const CounterContext = createContext<CounterContextType | undefined>(undefined);
// const CounterContext = createContext({ count: 0, totalCounter: () => {} });

type CartContextType = {
  cartItems: CartItem[];
  totalQuantity: number;
  addCartItem: (product: CartItem) => void;
};

const initialValue: CartContextType = {
  cartItems: [],
  totalQuantity: 0,
  addCartItem: () => {},
};

// Creating Context
export const CartContext = createContext<CartContextType>(initialValue);

// Creating Provider
export default function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function addCartItem(product: CartItem) {
    setCartItems([product]);
  }

  return (
    // current value
    <CartContext.Provider
      value={{
        cartItems,
        totalQuantity: cartItems.length,
        addCartItem,
      }}
    >
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
