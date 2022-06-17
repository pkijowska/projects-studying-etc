import { createStore } from 'redux';

const store = createStore((state={count:0}, action)=> {
  switch (action.type) {
    case 'INCREMENT':
      return {
      count: state.count+1
    }
    case 'DECREMENT':
      return {
        count: state.count-1
      }
    case 'RESET':
      return {
        count: 0
      }
    default:
      return state;
  }

// same as the above but easier to read
//   if (action.type === "INCREMENT") {
//     return {
//       count: state.count+1
//     }
//   } else {
//     return state
//   }
// })

//after this is will show count: 1


//action is object that is sent to the store
// actions for example -> increment
store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'RESET'
})

store.dispatch({
  type: 'DECREMENT'
});
