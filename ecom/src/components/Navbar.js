import React from 'react'
import "./Navbar.css";
function Navbar() {
    const currentUser = localStorage.getItem('currentUser');
    const user = currentUser ? JSON.parse(currentUser).name : null;

    function logout() {
        localStorage.removeItem('currentUser');
        window.location.href = '/login';
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg">
                <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul class="navbar-nav">
                        {
                            currentUser ? (<>
                                <li class="nav-item active">
                                    <a class="nav-link" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/products">Products</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/cart">Cart</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/sell">Sell</a>
                                </li>
                                <div class='dropdown'>
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        {user}
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item" href="/booked">Orders</a></li>
                                        <li><a class="dropdown-item" href="/profile">Profile</a></li>
                                        <li><a class="dropdown-item" href="#" onClick={logout}>Logout</a></li>
                                    </ul>
                                    
                                </div>
                            </>) : (<>
                                <li class="nav-item active">
                                    <a class="nav-link" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/products">Products</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/register">Register</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/login">Login</a>
                                </li>
                            </>)
                        }
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

