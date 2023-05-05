import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
function Navbar() {
    const navigate = useNavigate();
    return (
        <div className = "navbar">
            <h1 onClick = {() => navigate("/")}>Movie Tickets</h1>
            <NavLink to = "/tickets">Tickets</NavLink>
        </div>
    )
}

export default Navbar
