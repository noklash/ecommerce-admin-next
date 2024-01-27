import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import axios from "axios";

const Login = () => {

    

    const[userSession, setUserSession] = useState({})
    const [username, setUsername] = useState('');
    
    useEffect(() => {
        console.log(userSession)
    }, [userSession])

    const [password, setPassword] = useState('');
    

    const router = useRouter()

    const loginUser = async (ev) => {
        ev.preventDefault()
        const data = { username, password}

        const session = await axios.post('https://rest-ecommerce-next.onrender.com/api/login', data);
          setUserSession(session.data.data) 
        //   console.log(userSession) 
        // router.push('/register');
        
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

        <button type="submit" className="btn-primary my-4">Login </button>
    </form>
  )
}

export default Login