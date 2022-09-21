// import React, { useState } from "react";
// import { useEffect } from "react";

// const DidUpdate = () => {
//     const days = [
//         "Monday",
//         "Tuesday",
//         "Wednesday",
//         "Thirsday",
//         "Friday",
//         "Saturday",
//         "Sunday",
//     ]
//     const [text, setText] = useState("");
//     const [lists, setLists] = useState(days);

//     useEffect(() => {
//         const filtered = days.filter((elem) => elem.toLocaleLowerCase().includes(text.toLocaleLowerCase()))
//         setLists(filtered)
//     }, [text])

//     //   useEffect(() => {
//     //     const filtereDays = lists.filter((elem) => elem === text);
//     //     setLists(filtereDays);
//     //   }, [text]);

//     return (
//         <div>
//             <h1>This is Didupdate component </h1>
//             <input type="text" onChange={(e) => setText(e.target.value)} />
//             <div>


//                 <ul>
//                     {lists.map((days) => {
//                         return (
//                             <li>{days}</li>
//                         )
//                     })}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default DidUpdate;
