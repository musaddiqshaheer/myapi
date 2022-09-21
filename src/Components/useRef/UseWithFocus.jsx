import React from 'react';

import{useRef} from "react"

const UseWithFocus = () => {
    const inputRef= useRef(null);
    console.log(inputRef)
    const handlefocus=()=>{
        inputRef.current.focus();
    }
    return (
        <div>
            <h1>Hello useRef</h1>
            <input ref={inputRef} type="text" />
            <button onClick={handlefocus}>focus input box </button>
            
        </div>
    );
};

export default UseWithFocus;