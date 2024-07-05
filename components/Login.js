"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import axios from "axios";
import { useAuth } from './AuthProvider';

const Login = () => {
    const { setToken } = useAuth()

    const [isLoading, setIsLoading] = useState(false)
    
    const [username, setUsername] = useState('');
    
   

    const [password, setPassword] = useState('');
    

    const router = useRouter()

    const loginUser = async (ev) => {
        ev.preventDefault()
        const data = { username, password}
        setIsLoading(!isLoading)

        await axios.post('https://rest-ecommerce-next.onrender.com/api/login', data)
            .then((res)=> {
                console.log("login successful", res.data);
                const token = res.data.data.token;
                localStorage.setItem("token", 'Bearer ' + token);
                setToken(token)
                console.log(token)
                axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
                
                if(res.status){
                    router.push('/first');
                }
            })
            .catch((error) => {
                console.log("signin error", error)
            })
            
        
        
    }

  return (
    <form className='m-6 p-2' onSubmit={loginUser}>
       <h1>Login</h1>
        <label>Username</label>
            <input 
                type="username" 
                placeholder="last name"
                value={username}
                onChange={ev => setUsername(ev.target.value)} 
            />

        
        <label>Password</label>
            <input 
                type="password" 
                placeholder="password"
                value={password}
                onChange={ev => setPassword(ev.target.value)} 
            />

        <button type="submit" className="btn-primary my-4">{isLoading ? "loading..." : "Login" }</button>
    </form>
  )
}

export default Login