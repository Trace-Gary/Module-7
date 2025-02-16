import { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) { // switch statements are common in reducers
        case "increment":
return state + 5;
case "decrement":
    return state - 10;
default:
    return state;
} };

function ReducerCounter() {
    // useReducer takes a reducer function and the initial state value
    // returns array with the state variable and a dispatch function

    const [counter, dispatch] = useReducer(reducer, 0);

    const handleIncrement = () => {
        // we call the dispatch function to make all state updates
        dispatch({ type: "increment" });
};
    const handleDecrement = () => {
        // dispatch takes a single argument - object passed to reducer
        dispatch({ type: "decrement" });
};



    return (
       <div className="ReducerCounter componentBox">
          <h2>Count: {counter}</h2>
          <button onClick={handleIncrement}>Reducer Increment</button>
          <button onClick={handleDecrement}>Reducer Decrement</button>
</div> );
};

export default ReducerCounter;