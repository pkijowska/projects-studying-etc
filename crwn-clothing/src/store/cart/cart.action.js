import { CART_ACTIVE_TYPES } from './cart.types';
import { createAction } from "../../utils/reducer/reducer.utils";

export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const reduceCartItems = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

// check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

// return back cartitems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
}

export const increaseCartItems = (cartItems, cartItemToAdd) => {
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToAdd.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );
}

export const setIsCartOpen = (boolean) => createAction(CART_ACTIVE_TYPES.SET_IS_CART_OPEN, boolean);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd)
  return createAction(CART_ACTIVE_TYPES.SET_CART_ITEMS, newCartItems)
}

export const reduceCount = (cartItems, product) => {
  const newCartItems = reduceCartItems(cartItems, product);
  createAction(CART_ACTIVE_TYPES.SET_CART_ITEMS, newCartItems)
}

export const removeItem = (cartItems, product) => {
  const removedFromArrayList = cartItems.filter(item => item.id !== product.id)
  const newCartItems = removedFromArrayList;
  createAction(CART_ACTIVE_TYPES.SET_CART_ITEMS, newCartItems)
}
