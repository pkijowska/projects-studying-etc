import { createStore, combineReducers } from 'redux';
import eventsReducer from '../reducers/events';
import dayReducer from '../reducers/day';

export default () => {
  const store = createStore(
    combineReducers({
      events: eventsReducer,
      currentDay: dayReducer
    })
  );
  return store;
}
