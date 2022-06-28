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
