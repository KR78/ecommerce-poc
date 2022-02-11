import {
  ApolloError, ApolloQueryResult, OperationVariables,
} from '@apollo/client';
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
  category: Category,
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

export interface Aggregate {
  aggregate: {
    count: number
  }
}

export interface Category {
  id: number,
  name: string,
}

export type Categories = Category[]

export interface FilterOptionData {
  name: string,
  value: any
  onClick(v: any): void
}

export type FilterOptions = FilterOptionData[]

export enum InputType {
  CHECKBOX = 'checkbox',
  RADIO = 'radio'
}

export interface FilterOption {
  name: string,
  inputType: InputType,
  options: FilterOptions
}

export interface Filters {
  [v: string]: FilterOption
}

export interface ProductsData {
  products_aggregate: Aggregate,
  products: Products
}

export interface ProductsDataState {
  loading: boolean,
  error: ApolloError | undefined,
  data: ProductsData,
  refetch(variables?: Partial<OperationVariables> | undefined): Promise<ApolloQueryResult<any>>
}