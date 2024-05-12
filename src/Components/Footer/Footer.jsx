import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
export const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer-links">
        <li><Link to="/" className='footer-menu'>Home</Link></li>
        <li><Link to="/about_me" className='footer-menu'>About Me</Link></li>
      </ul>
      <div className="footer-right">
        <p>Powered By SeshuKiDuniya</p>
      </div>
    </div>
  )
}
