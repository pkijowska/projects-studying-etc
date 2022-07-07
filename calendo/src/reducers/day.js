export default (state = 1, action) => {
  switch (action.type) {
    case 'STORE_DAY':
      return action.id
    default:
      return state;
  }
};
