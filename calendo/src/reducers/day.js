const now = new Date();
const dayOfTheWeek = now.getDate();

export default (state = dayOfTheWeek, action) => {
  switch (action.type) {
    case 'STORE_DAY':
      return action.id
    default:
      return state;
  }
};
