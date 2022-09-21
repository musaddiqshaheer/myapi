import React from 'react';
import { useRef } from 'react';
import { useState,useEffect , } from 'react';

const UserefTimer = () => {
    
    const[time,setTime]=useState(0);
    const refValue=useRef(null);
    useEffect(()=>{
        refValue.current=setInterval(()=>{
            setTime((preState)=>preState +1)
        },1000 );
      
    },[])



    return (
        <div>
            <h1>Time:{time}</h1>
        </div>
    );
};

export default UserefTimer;










// import React,{useSate,useEffect,useRef} from 'react';

// const UserefTimer = () => {
//     const [timer,setTime]=useSate(0);
//     const refValue=useRef(null);
//     useEffect(()=>{
//         refValue.current=setInterval(()=>{
//         setTime((preState)=>preState+1)

//     },1000);
//     },[])
//     return (
//         <div>
//             <h1>Timer:{timer}</h1>
            
//         </div>
//     );
// };

// export default UserefTimer;