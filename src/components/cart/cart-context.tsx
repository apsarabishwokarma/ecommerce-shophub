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
  totalPrice: number;
  addCartItem: (product: CartItem) => void;
  removeItemFromCart: (id: number) => void;
  incrementQty: (id: number) => void;
  decrementQty: (id: number) => void;
};

const initialValue: CartContextType = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
  addCartItem: () => {},
  removeItemFromCart: () => {},
  incrementQty: () => {},
  decrementQty: () => {},
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

  function incrementQty(id: number) {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, itemQuantity: item.itemQuantity + 1 } : item
      )
    );
  }
  function decrementQty(id: number) {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.itemQuantity > 1
          ? { ...item, itemQuantity: item.itemQuantity - 1 }
          : item
      )
    );
  }

  let totalQuantity = 0;
  for (let i = 0; i < cartItems.length; i++) {
    totalQuantity = totalQuantity + cartItems[i].itemQuantity;
  }

  let totalPrice = 0;
  for (let i = 0; i < cartItems.length; i++) {
    totalPrice = totalPrice + cartItems[i].itemQuantity * cartItems[i].price;
  }

  return (
    // current value
    <CartContext.Provider
      value={{
        cartItems,
        totalQuantity: totalQuantity,
        addCartItem,
        removeItemFromCart,
        totalPrice,
        incrementQty,
        decrementQty,
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
