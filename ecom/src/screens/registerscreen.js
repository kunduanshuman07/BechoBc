import React, { useState } from 'react';
import axios from "axios";
import "./registerscreen.css";
function Registerscreen() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setcPassword] = useState('');
    const [phone,setPhone]=useState();
    const [city,setCity]=useState('');
    const [state,setState]=useState('');
    const [pincode,setPincode]=useState();
    const [about,setAbout]=useState('');
    async function register() {
        if (password == cpassword) {
            const user = {
                name, email, password,cpassword,phone,city,state,pincode,about
            }
            try {
                const result=await axios.post('/api/users/register',user).data;
                console.log(result);
                setName('');
                setEmail('');
                setPassword('');
                setcPassword('');
                setPhone('');
                setCity('');
                setState('');
                setPincode('');
                setAbout('');
            } catch (e) {
                console.log(e);
            }
        }
        else {
            alert('Password Mismatch');
        }
    }
    return (
        <div className='registerScreen'>
            <form>
                <h1>Register</h1>
                <input type='text' placeholder='name' value={name} onChange={(e) => { setName(e.target.value) }} />
                <input type='mail' placeholder='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <input type='password' placeholder='password' value={password} onChange={(e) => { setPassword(e.target.value) }}/>
                <input type='text' placeholder='confirm password' value={cpassword} onChange={(e) => { setcPassword(e.target.value) }}/>
                <input type='text' placeholder='about u ?' value={about} onChange={(e) => { setAbout(e.target.value) }}/>
                <input type='number' placeholder='phone number' value={phone} onChange={(e) => { setPhone(e.target.value) }}/>
                <input type='text' placeholder='city' value={city} onChange={(e) => { setCity(e.target.value) }}/>
                <input type='text' placeholder='state' value={state} onChange={(e) => { setState(e.target.value) }}/>
                <input type='number' placeholder='pincode' value={pincode} onChange={(e) => { setPincode(e.target.value) }}/>
                <button onClick={register}>Register</button>
                <a href="/login">Already have an account! Login...</a>
            </form>
        </div>
    )
}

export default Registerscreen