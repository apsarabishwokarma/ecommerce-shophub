"use client";

import CartProvider from "@/components/cart/cart-context";

function Providers({ children }: { children: React.ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}

export default Providers;
