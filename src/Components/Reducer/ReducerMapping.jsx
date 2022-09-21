import React, { useReducer } from 'react';
import "./Reducer.css"
export const initialstate = {
    allData: [
        { title: "Hulk", ratings: 5, year: 2008 },
        { title: "Thor", ratings: 4, year: 2007 },
        { title: "Iron Man", ratings: 5, year: 2018 },
        { title: "Captain America", ratings: 5, year: 2012 },
        { title: "Loki", ratings: 4, year: 2010 },
    ],
    added: [],
};
export const reducer = (state, action) => { 
    if (action.type === "Add-Movie") {
        return { ...state, added: [...state.added, action.data] }

    }
};

const ReducerMapping = () => {
    const [getState, dispatch] = useReducer(reducer, initialstate)
    return (
        <div className='buld'>
            <h1>Hello allData!</h1>
            {getState.allData.map((item) => {
                return (
                    <div>
                        <h1>{item.title}</h1>
                        <h2>{item.rating}</h2>
                        <h4>{item.year}</h4>
                        <button onClick={() => dispatch({ type: "Add-Movie", data: item })}>Add Movie</button>
                    </div>
                );

            })}
            <h1>Added items</h1>

            {getState.added.map((item) => {
                return (
                    <div>
                        <h1>{item.title}</h1>
                        <h2>{item.rating}</h2>
                        <h4>{item.year}</h4>
                    </div>
                );
            })}
        </div>
    );
};

export default ReducerMapping;