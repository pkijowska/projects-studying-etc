import { createContext, useReducer } from 'react';

import { createAction } from '../utils/reducer/reducer.utils';

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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  reduceCount: () => {},
  increaseCount: () => {},
  removeItem: () => {}
})

const INITIAL_STATE = {
  isCartOpen: true,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
}

const cartReducer = ( state, action )=> {
  const { type, payload} = action;

  switch(type) {
    case CART_ACTIVE_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload
      }
    case CART_ACTIVE_TYPES.SET_IS_CART_OPEN:
        return {
          ...state,
          isCartOpen: payload
        }
    default:
      throw new Error(`unhandled type of ${type} in cartReducer`)
  }
}


export const CartProvider = ({ children }) => {

  const [{ cartItems, isCartOpen, cartCount, cartTotal }, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const AddToCartAction = (itemToAdd) => {
    dispatch(createAction(CART_ACTIVE_TYPES.ADD_TO_CART, itemToAdd ));
  }

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce((total, cartItem) => total+cartItem.quantity, 0)

    const newCartTotal = newCartItems.reduce((total, cartItem) => total+ (cartItem.price * cartItem.quantity), 0)

    dispatch(createAction(CART_ACTIVE_TYPES.SET_CART_ITEMS, { cartItems: newCartItems, cartTotal: newCartTotal, cartCount: newCartCount }
    ))
  }

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd)
    updateCartItemsReducer(newCartItems)
  }

  const setIsCartOpen = (bool) => {
    dispatch(createAction(CART_ACTIVE_TYPES.SET_IS_CART_OPEN, bool))
  }

  const reduceCount = (product) => {
    const newCartItems = reduceCartItems(cartItems, product);
    updateCartItemsReducer(newCartItems)
  }

  const removeItem = (product) => {
    const removedFromArrayList = cartItems.filter(item => item.id !== product.id)
    const newCartItems = removedFromArrayList;
    updateCartItemsReducer(newCartItems)
  }

  const increaseCount = (product) => {
    const newCartItems = increaseCartItems(cartItems, product);
  }

  const  value  = {  removeItem, reduceCount, increaseCount, cartCount, isCartOpen, setIsCartOpen, addItemToCart, cartItems }
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}
