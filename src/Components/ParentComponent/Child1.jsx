import React from 'react';
import Child2 from './Child2';

const Child1 = () => {
    return (
        <div>
            <h1>This is Child Component</h1>
            <Child2/>
            {/* <Child2 text={50} value={props.value}  /> */}
        </div>
    );
};

export default Child1;  