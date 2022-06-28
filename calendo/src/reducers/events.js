const eventsReducerDefaultState = [];

export default (state = eventsReducerDefaultState, action) => {
  switch (action.type) {
    case 'REMOVE_EXPENSE':
      return state.filter(({ eventNr }) => eventNr !== action.eventNr);
    default:
      return state;
  }
};
