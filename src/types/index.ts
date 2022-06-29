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
  getCartItemById: (id: number) => CartItem[];
  getCartQuantity: () => number;
  getTotal: () => number;
  removeCartItem: (id: number, varian: string) => void;
  // increaseQuantity: () => void;
  // decreaseQuantity: () => void;
};

export type CartItem = {
  id: number;
  quantity: number;
  color: Colors;
  variant: number | string;
};

export type TableItem = {
  id: number;
  quantity: number;
  color: Colors;
  variant: number | string;
  price: string;
  name: string;
};
