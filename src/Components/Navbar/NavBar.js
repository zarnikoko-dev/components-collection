import React, { useState } from 'react';
import "./NavBar.css";

const NavBar = (props) => {
    const [slide,setSlide] = useState(false);
    return(
        <nav className="nav">
            <div className="menu-logo" onClick={()=>setSlide(prev=>!prev)}>
                <div className="menu">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <div className="logo-text">LOGO</div>
            </div>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Help</a></li>
            </ul>
            <div></div>
            <ul className={"sidebar"+(slide?' active':'')}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Help</a></li>
            </ul>
        </nav>
    )
}

export default NavBar