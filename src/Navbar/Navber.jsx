import React, { useState } from 'react'
import './Navbar.css'
import logo from '../assets/react.svg'
import Header from '../Header/Header'

const Navber = ({iscurrvalue,setIsCurrValue}) => {
    const [navbar,setNavbar] = useState("home")
  return (
    <>
    <div className='Navber'>
        <div className="left-nav">
            <img src={logo} alt="" />
             <p>Popup</p> 
        </div>
        <div className="center-nav">
            <ul>
                <li onClick={()=>setNavbar("home")}  className={navbar==="home"?"active":""}>home</li>
                <li onClick={()=>setNavbar("menu")} className={navbar==="menu"?"active":""}>menu</li>
                <li onClick={()=>setNavbar("contact")} className={navbar==="contact"?"active":""}>contact</li>
                <li onClick={()=>setNavbar("about us")}className={navbar==="about us"?"active":""}>about us</li>
            </ul>
        </div>
        <div className="right-nav">
            <button onClick={()=>setIsCurrValue(true)}>sign up <br/> </button>
            

        </div>

    </div>
    <Header/>
    </>
  )
}

export default Navber