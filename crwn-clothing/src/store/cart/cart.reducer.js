import {CART_ACTIVE_TYPES} from './cart.types';

export const CART_INITIAL_STATE = {
  isCartOpen: true,
  cartItems: [],
}

export const cartReducer = ( state=CART_INITIAL_STATE, action={} )=> {
  const { type, payload} = action;

  switch(type) {
    case CART_ACTIVE_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload
      }
    default:
      return state
  }
}
