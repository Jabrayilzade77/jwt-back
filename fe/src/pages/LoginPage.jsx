import React, { useState } from 'react'
import Cookies from 'js-cookie';

function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        

        const requestOptions = {
            method:"POST",
            headers:{  "Content-Type": "application/json"},
            body:JSON.stringify({email,password})
        }

        fetch("http://localhost:3000/login",requestOptions)
        .then((res)=>res.json())
        .then((token)=>{
            Cookies.set("token",token.accessToken)
            console.log(token)
        })
    }

  return (
    <div>
        <h1>LoginPage</h1>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" value={email} onChange={(e=>setEmail(e.target.value))} name="" id="" placeholder='email'/>
            <br />
            <input type="text"  value={password} onChange={(e=>setPassword(e.target.value))} name="" id="" placeholder='password'/>
            <br />
            <button>send</button>
        </form>
    </div>
  )
}

export default LoginPage