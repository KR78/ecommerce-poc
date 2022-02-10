export interface ProductImage {
  src: string;
  alt: string;
}

export type ProductImages = ProductImage[]

export type Recommendations = ProductImage[]

export interface Product {
  id: number,
  name: string,
  image: ProductImage,
  price: number,
  featured: boolean,
  bestSeller: boolean,
  orginalPrice?: number,
  details?: {
    dimensions: Dimensions,
    size: number | undefined,
    description: string,
    recommendations: Recommendations,
  },
}

export type Products = Product[];

export interface KeyValPair {
  [v: string]: any,
}

export enum Currency {
  USD = '$',
}

export interface CartItem extends Product {
  quantity: number,
}

export type CartItems = CartItem[];

export interface Dimensions {
  width: number | undefined,
  height: number | undefined,
}
