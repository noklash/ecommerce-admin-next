import React, { useState } from 'react'
import { useRouter } from "next/router";
import axios from "axios";

const Register = () => {

    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const router = useRouter()

    const createUser = async (ev) => {
        ev.preventDefault()
        const data = {username, firstName, lastName, email, age, password}
        if(password !== confirmPassword){
            alert("passwords do not match")
            return;
        }else{
            await axios.post('https://rest-ecommerce-next.onrender.com/api/signup', data);
            router.push('/login');
        }
        
        
    }

  return (
    <form className='m-6 p-2' onSubmit={createUser}>
        <h1>Create Account</h1>
        <label>Username</label>
            <input 
                type="text" 
                placeholder="username"
                value={username}
                onChange={ev => setUsername(ev.target.value)} 
            />
        
        <label>First name</label>
            <input 
                type="text" 
                placeholder="first name"
                value={firstName}
                onChange={ev => setFirstName(ev.target.value)} 
            />

        <label>Last name</label>
            <input 
                type="text" 
                placeholder="last name"
                value={lastName}
                onChange={ev => setLastName(ev.target.value)} 
            />
        <label>Email</label>
            <input 
                type="email" 
                placeholder="last name"
                value={email}
                onChange={ev => setEmail(ev.target.value)} 
            />

        <label>Age</label>
            <input 
                type="number" 
                placeholder="age"
                value={age}
                onChange={ev => setAge(parseInt(ev.target.value))} 
            />
        
        <label>Password</label>
            <input 
                type="password" 
                placeholder="password"
                value={password}
                onChange={ev => setPassword(ev.target.value)} 
            />

        <label>Confirm Password</label>
            <input 
                type="password" 
                placeholder="confirm password"
                value={confirmPassword}
                onChange={ev => setConfirmPassword(ev.target.value)} 
            />
        <button type="submit" className="btn-primary my-4">Register </button>
    </form>
  )
}

export default Register