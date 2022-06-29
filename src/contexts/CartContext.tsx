import { createContext, ReactNode, useState } from "react";
import { CartContextType, CartItem, Colors } from "../types";
import data from "../data/products.json";

type CartProviderProps = {
  children: ReactNode;
};

export const CartContext = createContext({} as CartContextType);

function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems([...cartItems, item]);
  };

  const getCartItems = () => {
    return cartItems;
  };

  const getCartItemById = (id: number) => {
    return cartItems.filter((item) => item.id === id);
  };

  const getCartQuantity = () => {
    return cartItems.reduce((quantity, item) => item.quantity + quantity, 0);
  };

  const getTotal = () => {
    return cartItems.reduce((curr, cartItem) => {
      const item = data.items.find((i) => i.id === cartItem.id);
      let total = 0;
      if (item) {
        const { price } = item;
        total = curr + +price * cartItem.quantity;
      }
      return total;
    }, 0);
  };

  const removeCartItem = (id: number, variant: string, color: Colors) => {
    const otherItems = cartItems.filter((item) => item.id !== id);
    let sameItems = cartItems.filter((item) => item.id === id);
    if (variant) {
      sameItems = sameItems.filter((item) => item.variant !== variant);
    } else {
      sameItems = sameItems.filter((item) => item.color !== color);
    }
    setCartItems([...otherItems, ...sameItems]);
  };

  const increaseQuantity = (id: number, variant: string, color: Colors) => {
    const items = cartItems.map((item) => {
      if (item.id === id && item.variant === variant && color === item.color) {
        item.quantity += 1;
        return item;
      }
      return item;
    });
    setCartItems(items);
  };

  const decreaseQuantity = (id: number, variant: string, color: Colors) => {
    const items = cartItems.map((item) => {
      if (item.id === id && item.variant === variant && color === item.color) {
        item.quantity -= 1;
        return item;
      }
      return item;
    });
    setCartItems(items);
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        getCartItems,
        getCartItemById,
        getCartQuantity,
        getTotal,
        removeCartItem,
        increaseQuantity,
        decreaseQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
