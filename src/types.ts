export interface Image {
  src: string;
  alt: string;
}

export interface Product {
  id: number;
  name: string;
  image: Image;
  price: number;
  orginalPrice?: number;
}

export type Products = Product[];

export interface KeyValPair {
  [v: string]: any;
}

export enum Currency {
  USD = '$',
}

export interface CartItem extends Product {
  quantity: number;
}

export type CartItems = CartItem[];

export interface Dimensions {
  width: number,
  height: number,
}