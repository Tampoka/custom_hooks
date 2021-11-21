import React, {useState} from "react";
import useInput from "./hooks/useInput";

function App() {
   const username=useInput('')
   const password=useInput('')
    console.log(username)
    return (
        <div>
            <input {...username} type="text" placeholder="Username"/>
            <input {...password} type="password" placeholder="Password"/>
            <h3>{username.value}</h3>
            <h3>{password.value}</h3>
        </div>
    );
}

export default App;
