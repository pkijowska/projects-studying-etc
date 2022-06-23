import { createStore, combineReducers } from 'redux';

const expensesReducer = (state=[], action) =>  {
  switch(action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ]
    case 'REMOVE_EXPENSE':
        return state.filter(({ id }) => {
          return id !== action.id
        })
    default:
      return state;
  }
}

const filterReducer = (state={text='', sortBy='date', startDate=undefined, endDate=undefined},action)=> {
  switch(action.type) {
    default:
      return state;
  }
}

const addExpense = ({description="", note="", amount=0, createdAt=0} = {}) => {
  type: 'ADD_EXPENSE',
  expense: {
    id
    description,
    note,
    amount,
    createdAt
  }
}

const removeExpense = ({id}={}) {
  type: 'REMOVE_EXPENSE',
  id
}


const store = createStore(combineReducers({
  expenses: expensesReducer,
  filter: filterReducer
}));

store.subscribe(()=> {
  console.log('hey')
})

const expenseOne = store.dispatch(addExpense({id: 5, description: 'Rent', amount: 100}))
const expenseTwo = store.dispatch(addExpense({id: 4, description: 'Coffee', amount: 200}))
store.dispatch(removeExpense({id: expenseOne.expense.id}))
