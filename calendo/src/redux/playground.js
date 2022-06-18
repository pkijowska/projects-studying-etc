import { createStore } from 'redux';

const incrementCount = ({incrementBy = 1}= {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({decrementBy = 1} = {}) =>  ({
  type: 'DECREMENT',
  decrementBy
})

const reset = () => ({
  type: 'RESET',
})

const store = createStore((state={count:0}, action)=> {
  switch (action.type) {
    case 'INCREMENT':
      return {
      count: state.count+action.incrementBy
    }
    case 'DECREMENT':
      return {
        count: state.count-action.decrementBy
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
const unsubscribe  = store.subscribe(()=> {
  console.log(store.getState())
})

store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
});

store.dispatch({
  incrementCount({incrementBy: 5})
})

store.dispatch(decrementCount({decrementBy: 10}))
unsubscribe()

store.dispatch(
  reset()
)

store.dispatch({
  type: 'DECREMENT',
  decrementBy: 5
});
