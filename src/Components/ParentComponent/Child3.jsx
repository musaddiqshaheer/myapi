import React from 'react';
import { sendData } from './Parent';

const Child3 = () => {
    const data
    return (
        <div>
            <h1> Child 3 </h1>
            <h1>Data recevide from parent :(sendData);</h1>
            {/* <sendData.Consumer>
                {(value)=> {
                  return <h1>Data recevied from parent :{value}</h1>

                }}


            </sendData.Consumer> */}
           
        </div>
    );
};

export default Child3;