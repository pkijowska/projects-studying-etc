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
    case 'EDIT_EXPENSE':
        return state.map((expense) => {
          if (expense.id === action.id) {
            return {
              ...expense,
              ...action.updates
            }
          } else {
            return expense
          }
        })
    default:
      return state;
  }
}

const setTextFilter = (text) => ({
  type: 'SET_TEXT',
  text
})

const editExpense = (id, updates) => ({
  type: 'Edit_EXPENSE',
  id,
  updates
})

const sortByAmount = () => ({
  type: 'SORT_AMOUNT'
})

const sortByDate = () => ({
  type: 'SORT_DATE'
})

const filterReducer = (state={text='', sortBy='date', startDate=undefined, endDate=undefined},action)=> {
  switch(action.type) {
    case 'SET_TEXT':
      return {...state, text: action.text}
    case 'SORT_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SORT_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
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

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense)=> {
    const startDateMatch = typeof startDate !== 'number';
    const endDateMatch;
    const textMatch;

    return startDateMatch && endDateMatch && textMatch
  }
}

const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
})

const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
})


const store = createStore(combineReducers({
  expenses: expensesReducer,
  filter: filterReducer
}));

store.subscribe(()=> {
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
})

const expenseOne = store.dispatch(addExpense({id: 5, description: 'Rent', amount: 100}))
const expenseTwo = store.dispatch(addExpense({id: 4, description: 'Coffee', amount: 200}))
store.dispatch(removeExpense({id: expenseOne.expense.id}))
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))
store.dispatch(setTextFilter('rent'))
store.dispatch(sortByAmount())
store.dispatch(sortByDate())
store.dispatch(setStartDate(125))
