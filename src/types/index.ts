export type Colors = "black" | "white" | "red" | "orange" | "green";

export type Product = {
  id: number;
  name: string;
  brand: string;
  price: string;
  available: boolean;
  weight: number;
  imgUrl: string;
  options: any[];
};

export type CartContextType = {
  addToCart: (item: CartItem) => void;
  getCartItems: () => CartItem[];
  // getCartItemById: () => void;
  getCartQuantity: () => number;
  // removeCartItem: () => void;
  // increaseQuantity: () => void;
  // decreaseQuantity: () => void;
};

export type CartItem = {
  id: number;
  quantity: number;
  color: string;
  variant: number | string;
};
