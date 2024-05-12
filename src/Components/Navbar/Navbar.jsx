import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <h1>LinksKiDuniya</h1>
                <h5>SeshuKiDuniya</h5>
            </div>
            <ul className="navmenu">
                <li><Link to="/" className='navmenu-links'>Home</Link></li>
                <li><Link to="/about_me" className='navmenu-links'>About Me</Link></li>
            </ul>
        </div>
    )
}
