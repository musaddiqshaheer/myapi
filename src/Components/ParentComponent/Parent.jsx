import React from 'react';
import { createContext } from 'react';
import Child1 from './Child1';

export const sendData= createContext();
const Parent = () => {
    console.log(sendData);
    const name = "mushu"
    return (
        <div>
            <h1>This is parent Componts </h1>
            <sendData.Provider value={name}>
                 
            <Child1/>
            </sendData.Provider>
           
        </div>
    );
};

export default Parent;