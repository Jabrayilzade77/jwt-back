import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function RegisterPage() {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        

        const requestOptions = {
            method:"POST",
            headers:{  "Content-Type": "application/json"},
            body:JSON.stringify({email,password})
        }

        fetch("http://localhost:3000/register",requestOptions)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            navigate("/login")
        })
    }

  return (
    <div>
        <h1>RegisterPage</h1>
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

export default RegisterPage