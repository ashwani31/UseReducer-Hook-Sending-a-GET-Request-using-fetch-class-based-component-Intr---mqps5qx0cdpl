// import React, { useReducer } from 'react'
// import { counterReducer } from '../reducers/counterReducer';
import "../styles/App.css";
// const App = () => {
// const [state,dispatch] = useReducer(counterReducer,{/*initial state to be placed here*/})
//   return (
//     <div id="main">

//     </div>
//   )
// }

// // export default App;
// import React, { createContext, useContext, useReducer } from "react";

// const initialState = {
//   count1: 0,
//   count2: 0
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         ...state,
//         [action.name]: state[action.name] + 1
//       };
//     case "DECREMENT":
//       return {
//         ...state,
//         [action.name]: state[action.name] - 1
//       };
//     default:
//       return state;
//   }
// };

// const useValue = () => useReducer(reducer, initialState);

// const Context = createContext(null);

// const useGlobalState = () => {
//   const value = useContext(Context);
//   if (value === null) throw new Error("Please add GlobalStateProvider");
//   return value;
// };

// const GlobalStateProvider = ({ children }) => (
//   <Context.Provider value={useValue()}>{children}</Context.Provider>
// );

// const Counter = ({ name }) => {
//   const [state, dispatch] = useGlobalState();
//   return (
//     <div id="main">
//       {state[name]}
//       <button onClick={() => dispatch({ type: "INCREMENT", name })}>+1</button>
//       <button onClick={() => dispatch({ type: "DECREMENT", name })}>-1</button>
//     </div>
//   );
// };

// const App = () => (
//   <GlobalStateProvider>
//     <h1>Count1</h1>
//     <Counter name="count1" />
//     {/* <Counter name="count1" /> */}
//     {/* <h1>Count2</h1>
//     <Counter name="count2" />
//     <Counter name="count2" /> */}
//   </GlobalStateProvider>
// );
import React, { useReducer } from "react";
import ReactDOM from "react-dom";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
    </>
  );
}
export default App;
