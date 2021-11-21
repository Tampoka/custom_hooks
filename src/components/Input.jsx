import React from 'react';
import useInput from "../hooks/useInput";

const Input = () => {
    const username=useInput('')
    const password=useInput('')
    return (
        <div>
            <input {...username} type="text" placeholder="Username"/>
            <input {...password} type="password" placeholder="Password"/>
            <h3>{username.value}</h3>
            <h3>{password.value}</h3>
        </div>
    );
};

export default Input;