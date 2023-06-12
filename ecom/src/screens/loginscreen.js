import React, { useState } from 'react';
import axios from 'axios';
import "./loginscreen.css";
function Loginscreen() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function login(){
        const user={
            email,password
        }
        try {
            const result=(await axios.post('/api/users/login',user)).data;
            localStorage.setItem('currentUser',JSON.stringify(result));
            window.location.href='/products';
        } catch (e) {
            console.log(e);
        }
    }



    return (
        <div className='loginScreen'>
            <form>
                <h1>Login</h1>
                <input type='mail' placeholder='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <input type='password' placeholder='password' value={password} onChange={(e) => { setPassword(e.target.value) }}/>
                <button onClick={login}>Login</button>
                <a href="/register">New to this Place! Register for free...</a>
            </form>
        </div>
    )
}

export default Loginscreen