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
  totalQuantity: number;
  addCartItem: (product: CartItem) => void;
  removeItemFromCart: (id: number) => void;
};

const initialValue: CartContextType = {
  cartItems: [],
  totalQuantity: 0,
  addCartItem: () => {},
  removeItemFromCart: () => {},
};

// Creating Context
export const CartContext = createContext<CartContextType>(initialValue);

// Creating Provider
export default function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function addCartItem(product: CartItem) {
    // const existingCartItems = [...cartItems];
    // existingCartItems.push(product);

    // setCartItems(existingCartItems);

    setCartItems((prevItems) => {
      const existingProduct = prevItems.find((p) => p.id === product.id);

      if (existingProduct) {
        return prevItems.map((q) => {
          if (q.id === product.id) {
            return {
              ...q,
              itemQuantity: q.itemQuantity + product.itemQuantity,
            };
          } else {
            return q;
          }
        });
      } else {
        return [...prevItems, product];
      }
    });
  }

  function removeItemFromCart(id: number) {
    // console.log("Remove, ", id);
    // setCartItems((prevItems) => {
    //   return prevItems.filter((r) => {
    //     if (r.id === id) {
    //       return false;
    //     } else {
    //       return true;
    //     }
    //   });
    // });
    setCartItems((prevItems) => {
      return prevItems.filter((r) => r.id !== id);
    });
  }

  let totalQuantity = 0;
  for (let i = 0; i < cartItems.length; i++) {
    totalQuantity = totalQuantity + cartItems[i].itemQuantity;
  }

  return (
    // current value
    <CartContext.Provider
      value={{
        cartItems,
        totalQuantity: totalQuantity,
        addCartItem,
        removeItemFromCart,
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
