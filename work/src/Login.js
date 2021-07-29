import React from "react";
import { Link } from "react-router-dom";
const Login=()=>{

return(
    <>
<h1>You Have Successfully Logged</h1>
<Link to ="/logout"> 
<button className="button">login</button>
</Link>

    </>
)

}

export default Login;
