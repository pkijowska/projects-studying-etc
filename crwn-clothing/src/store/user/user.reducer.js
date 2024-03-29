import { USER_ACTION_TYPES } from './user.types';

export const userReducer = ( state = INITIAL_STATE, action ) => {
  const { type, payload } = action;

  switch(type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: payload
      }
    default:
      return state;
  }
}

const INITIAL_STATE = {
  currentUser: null,
}
