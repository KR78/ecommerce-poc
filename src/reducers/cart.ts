import { Product, CartItems, KeyValPair } from '@/types';

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const UPDATE_CART = 'UPDATE_CART';

const addItemToCart = (product: Product, state: KeyValPair) => {
  const newCart = [...state.cart];
  const itemToUpdate = newCart.findIndex((item) => item.id === product.id);

  if (itemToUpdate < 0) {
    newCart.push({
      ...product,
      quantity: 1,
      originalPrice: product?.price || 0,
    });
  } else {
    const updatedItem = {
      ...newCart[itemToUpdate],
    };
    updatedItem.quantity++;
    updatedItem.price = updatedItem.originalPrice * updatedItem.quantity;
    newCart[itemToUpdate] = updatedItem;
  }
  return { ...state, cart: newCart };
};

const removeProductFromCart = (productId: number, state: KeyValPair) => {
  const newCart = [...state.cart];
  const itemToUpdate = newCart.findIndex((item) => item.id === productId);

  const updatedItem = {
    ...newCart[itemToUpdate],
  };
  updatedItem.quantity--;
  updatedItem.price = updatedItem.originalPrice * updatedItem.quantity;
  if (updatedItem.quantity <= 0) {
    newCart.splice(itemToUpdate, 1);
  } else {
    newCart[itemToUpdate] = updatedItem;
  }
  return { ...state, cart: newCart };
};

const deleteProductFromCart = (productId: number, state: KeyValPair) => {
  const newCart = [...state.cart];

  const updatedCart = newCart.filter((product) => product.id !== productId);

  return { ...state, cart: updatedCart };
};

const updatCartOnCurrencyChange = (cart: CartItems, state: KeyValPair) => {
  const newCart = cart;
  return {
    ...state,
    cart: newCart,
  };
};

export const shopReducer = (
  state: KeyValPair,
  action: {
    type: string;
    cart: CartItems;
    product: Product;
    productId: number;
  }
) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addItemToCart(action.product, state);
    case REMOVE_PRODUCT:
      return removeProductFromCart(action.productId, state);
    case DELETE_PRODUCT:
      return deleteProductFromCart(action.productId, state);
    case UPDATE_CART:
      return updatCartOnCurrencyChange(action.cart, state);
    default:
      return state;
  }
};
