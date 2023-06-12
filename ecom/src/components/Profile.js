import React from 'react'
import "./Profile.css"
import Navbar from './Navbar'
function Profile() {
    const currentUser = localStorage.getItem('currentUser');
    const user = currentUser ? JSON.parse(currentUser).name : null;
    const email = currentUser ? JSON.parse(currentUser).email : null;
    const phone = currentUser ? JSON.parse(currentUser).phone : null;
    const city = currentUser ? JSON.parse(currentUser).city : null;
    const state = currentUser ? JSON.parse(currentUser).state : null;
    const pincode = currentUser ? JSON.parse(currentUser).pincode : null;
    const about = currentUser ? JSON.parse(currentUser).about : null;
    const admin = currentUser ? (JSON.parse(currentUser).isAdmin ? "Yes" : "No") : null;
    
    return (
        <>
            <Navbar />
            <div class="container">
                <div class="card">
                    <img src="https://via.placeholder.com/150" alt="Profile picture" />
                    <h2>{user}</h2>
                    <p>Admin Access : {admin}</p>
                    <button>Edit Profile</button>
                    
                </div>
                <div class="card">
                    <h2>About Me</h2>
                    <p>{about}</p>
                </div>
                <div class="card">
                    <h2>Contact Me</h2>
                    <p>Email: {email}</p>
                    <p>Phone: {phone} </p>
                    <p>Address: {city}, {state}, {pincode}</p>
                </div>

            </div>
        </>
    )
}

export default Profile