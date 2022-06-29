import { createContext, ReactNode, useState } from "react";
import { CartContextType, CartItem } from "../types";

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

  const getCartQuantity = () => {
    return cartItems.length;
  };

  return (
    <CartContext.Provider value={{ addToCart, getCartItems, getCartQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
