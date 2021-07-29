import React from "react";
import { useHistory } from "react-router-dom";
const Logout=()=>{

    let history = useHistory();
    const clickButton =()=>{
        history.push("./")
    }
return(
    <>
<h1>Logged Out Successfully</h1>
<button className="button" onClick={clickButton}>Logout</button>

    </>
)

}

export default Logout;
