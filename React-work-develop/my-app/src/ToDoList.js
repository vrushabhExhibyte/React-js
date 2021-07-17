// import React, { useState } from "react";
// import Button from "@material-ui/core/Button";
// import AddCircleIcon from "@material-ui/icons/AddCircle";

// const ToDoList = () => {
//   const [item, setItem] = useState("");
//   const [newItem, setNewItem] = useState([]);

//   const itemEvent = (event) => {
//     setItem(event.target.value);
//   };
//   const listItem = () => {
//     setNewItem((preValue) => {
//       return [...preValue, item];
//     });
//     setItem("");
//   };

//   return (
//     <>
//       <div className="main_div">
//         <div className="center_div">
//           <h1>ToDoList</h1>
//           <input
//             type="text"
//             value={item}
//             placeholder="enter name"
//             onChange={itemEvent}
//           />
//           <Button className="newbutton" onClick={listItem}>
//             <AddCircleIcon />
//           </Button>
//           <ol>
//             {newItem.map((val) => {
//               return <li>{val}</li>;
//             })}
//           </ol>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ToDoList;
