import { CART_ACTIVE_TYPES } from './cart.types';
import { createAction } from "../../utils/reducer/reducer.utils";

export const setIsCartOpen = (boolean) => createAction(CART_ACTIVE_TYPES.SET_IS_CART_OPEN, boolean);
