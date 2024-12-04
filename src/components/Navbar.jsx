import React, { useState } from 'react'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
    const [isMobile, SetIsMobile]=useState(false)
    // console.log(isMobile);
    
// let Sum=(a,b)=>{
// let sum=a+b
// }
// Sum(20,30)
// Sum(200,300)




    return (
        <div className='navbar'>
            <span>Malik Zeeshan</span>
            <ul className={`${isMobile?"menu_desktop":"menu"} `}>
                <li onClick={()=>{SetIsMobile(false)}}><Link to="/">Home</Link></li>
                <li onClick={()=>{SetIsMobile(false)}}><Link to="/about">About</Link></li>
                <li onClick={()=>{SetIsMobile(false)}}><Link to="/contact">Contact Us</Link></li>
            </ul>
            <MdOutlineMenu className='menu_icon' onClick={()=>SetIsMobile(!isMobile)} />
        </div>
    )
}   

export default Navbar
