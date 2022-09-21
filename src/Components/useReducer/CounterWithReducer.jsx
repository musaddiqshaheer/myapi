import { useReducer } from 'react';



export const initialstate = {
    countOne: 0,
    countTwo: 10,

};

   export const reducer = (state, action) => {
    if (action.type === "Decrement") {
      return {count: state.counter + action.data };
    }

}
    // if (action.type === "Decrement") => {
    //     return { count: state.counter + action.data };
    // }

    const CounterWithReducer = () => {
        const [count, dispatch] = useReducer(reducer, initialstate);
        return (
            <div>
                <h1>Hello useReducer!</h1>
                <h2>CountOne:{count.countOne}</h2>
                <button onClick={() => dispatch({type:"Increment",data:5})}>IncrementCountOne</button>
                <button onClick={() => dispatch({type:"Decrement",data:10})}>DecrementCounTwo</button>
                <h2>countTwo:{count.countTwo}</h2>
                <button onClick= {() => dispatch({type:"Increment",data:10})}>Increment</button>
                <button onClick={() => dispatch({type:"Decrement",data:10})}>Decrement</button>
                


            </div>
        );
    };

    export default CounterWithReducer;