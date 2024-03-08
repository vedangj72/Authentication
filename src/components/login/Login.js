import React, { useState } from 'react'
import "./style.css"


import { useLogin } from "../../hooks/useLogin";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {login,error,isPending}=useLogin()
    

    const handleUserNameChange = (e) => {
        setUsername(e.target.value);
      };
    
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };
    

    function handleSubmit(e)
    {
        e.preventDefault();
        console.log(username,password);
        login(username,password)
    }
  return (

    <div className="whole-background">
      <div className="page">
        <h1> Log in </h1>
        <form className="form-edits" action="Checkdata.html">
            <div className="email">
                <i className="fa-solid fa-envelope"></i>
                <input type="email" id="email" placeholder="Email" value={username} onChange={handleUserNameChange} />
            </div>
            <div className="Pass">
                <i className="fa-solid fa-lock"></i>
                <input type="password" id="pwd" placeholder="password" value={password} onChange={handlePasswordChange}/>
            </div>
            <input type="button" value="Log in" onClick={handleSubmit}/>
        </form>
    </div>
    </div>
  )
}
