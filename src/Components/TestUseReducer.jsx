// import React, { useReducer, useState } from 'react';

// export const initialStatevalue = {
//     counter: 0,
// };
// export const reducer = (state, action) => {
//     if (action.type === "Increment") {
//         return { counter: state.counter + action.data };
//     }
//     if (action.type === "Decrement") {
//         return { counter: state.counter - action.data };
//     }
// };

// const TestUseReducer = () => {
//     const [text, setText] = useState(0);
//     console.log(typeof text)
//     const [currentState, dispatch] = useReducer(reducer, initialStatevalue);
//     const handleIncreamnet = (e) => {
//         setText(parseInt(e.target.value))

//     }

//     return (
//         <div>
//             <h1>Hello UseReducer!</h1>
//             <h1>Current Count:{currentState.counter}</h1>
//             <input type="number" onChange= {handleIncreamnet} />
//             <button onClick={() => dispatch({ type: "Increment", data: text })}>Increment</button>
//             <button onClick={() => dispatch({ type: "Decrement", data: text })}>Decrement</button>
//         </div>
//     );
// };

// export default TestUseReducer;