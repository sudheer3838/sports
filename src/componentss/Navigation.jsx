import React from 'react'
import Logo from '../assets/images/logo.png'

const Navigation = () => {
    return (
        <nav className="navgation">
        <a href="#" className="logo">
          <img src={Logo} alt="Logo"/>
        </a>
        <ul className="menu list-unstyled">
          <li><a href="#">menu</a></li>
          <li><a href="#">location</a></li>
          <li><a href="#">about</a></li>
          <li><a href="#">contact</a></li>          
        </ul>
        <button className="login btn btn-primary">login</button>
      </nav>

    )
}

export default Navigation
