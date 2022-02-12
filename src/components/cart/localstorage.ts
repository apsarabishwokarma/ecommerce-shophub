import { CartItem } from "./cart-context";

const CART_KEY = "CART_ITEMS";

export function storeCartItems(items: CartItem[]) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
}

export function getCartItems() {
  let items = localStorage.getItem(CART_KEY);

  if (items) {
    return JSON.parse(items);
  } else {
    return [];
  }
}
