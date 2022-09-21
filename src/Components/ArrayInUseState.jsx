// import React, { useState } from 'react';

// const ArrayInUseState = () => {
//     const [text, setText] = useState("")
//     const [data, setData] = useState([])
//     const handleInputValue = (ele) => {
//         setText(ele.target.value);
//     };
//     const getClick = () => {
//         text.length > 0 && setData([...data, text]);
//     };
//     console.log(data);
//     return (
//         <div>
//             <h1>This is array in use state</h1>
//             <input type="text" placeholder="Name" onChange={handleInputValue} />
//             <button onClick={getClick}>Sumbit </button>
//             <ul>
//                 {data.map((ele) => (
//                     <li>{ele}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default ArrayInUseState;