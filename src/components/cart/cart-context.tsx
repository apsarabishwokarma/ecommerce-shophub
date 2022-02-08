"use client";
import { createContext, ReactNode, useContext, useState } from "react";

type CartItem = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  itemQuantity: number;
};

//const CounterContext = createContext();
// const CounterContext = createContext<CounterContextType | undefined>(undefined);
// const CounterContext = createContext({ count: 0, totalCounter: () => {} });

type CartContextType = {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  totalQuantity: number;
  addCartItem: (product: CartItem) => void;
};

const initialValue: CartContextType = {
  cartItems: [],
  setCartItems: () => {},
  totalQuantity: 0,
  addCartItem: () => {},
};

// Creating Context
export const CartContext = createContext<CartContextType>(initialValue);

// Creating Provider
export default function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function addCartItem(product: CartItem) {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        // Update quantity if item already exists
        return prevItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                itemQuantity: item.itemQuantity + product.itemQuantity,
              }
            : item
        );
      }
      return [...prevItems, product];
    });
  }
  return (
    // current value
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        totalQuantity: cartItems.reduce(
          (total, item) => total + item.itemQuantity,
          0
        ),
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
