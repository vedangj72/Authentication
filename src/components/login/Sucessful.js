import React from 'react'

import { getAuth, signOut } from "firebase/auth";

import { useNavigate } from "react-router-dom";

export default function Sucessful() {

    const navigate=useNavigate()

    function handlebutton(e)
    {

    }

  return (
    <div>
      Sucessful Login

            <button onClick={()=>{
              const auth = getAuth();
            signOut(auth).then(() => {
            // 
            console.log("Sign-out successful.")
            navigate("/")
            }).catch((error) => {
            console.log("An error happened.")
          });
            }}> Logout</button>
    </div>
  )
}
