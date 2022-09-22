**REACT**
Birth of Single Page Application (clicking on the new links won't create a new request to a server). It loads only a single web document, and then updates the body content of that single document via JavaScript APIs such as XMLHttpRequest and Fetch when different content is to be shown.
React is like - don't touch the DOM, I will do it.
Build websites like lego blocks.
One way data flow- data can move only from the state down. It makes debugging much easier.
- Organising better code

Declarative style-
based on the state of the app react to it.

What does react do? It translates the code we have in src into public folder (that's what our browsers understand). Will create build folder which is optimised (will use babel and webpack). Babel will make sure our js will be understood by different browsers. Webpack

By using class component we will have an access to something called STATE that we don't have an access to in funcitonal componenets

for lifecycle methods:
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
componentDidMount - after render, after the page has been rendered. Base component is loaded. This is where we do api calls.
componentDidUpdate - is is already mounted so no need for that but needs an update.
shouldcomponentUpdate - evaluate if we should update (it is mainly used for performance)
componentWillUnmount - if something is not rendered than it will do this

React
const CheckoutPage = ({cartItems, total}) => (
  <div className="checkout-page">
  </div>
)

if you need console log
const CheckoutPage = ({cartItems, total}) => {
  console.log('sth')
  return (
    <div className="checkout-page">
    </div>
    )
}

Page will rerender if props change or if we call set state or if the parent will call its own rerender

_______________________________________________________________________
why hooks were added?
- we need lifecycles methods and state in functional components
- useState will completely change state instead of merging data as in the past

________________________________________________________________________
Redux:
https://codesandbox.io/s/github/reduxjs/redux-essentials-example-app/tree/checkpoint-2-reactionButtons/?from-embed=&file=/src/features/posts/PostsList.js

**ReACT JEST**
cheatsheet
https://github.com/sapegin/jest-cheat-sheet

**REACT TEST**
https://github.com/sudheerj/reactjs-interview-questions

**state management**
useReducer, useContext, redux

useContext not so goo because of accesibility, but as application scales it is more difficult to useContext, it is not so easy to access all data by all component comparing to redux. Redux will wrap the whole application everywhere.
