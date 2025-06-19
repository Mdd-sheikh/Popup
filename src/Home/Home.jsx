import React, { useState } from 'react'
import './Home.css'
import Navber from '../Navbar/Navber'
import Popup from '../Popup/Popup'

const Home = () => {
    const [iscuurValue,setIsCurrValue] = useState(false)
  return (
    <>
    {iscuurValue?<Popup setIsCurrValue={setIsCurrValue}/>:<></>}
    <Navber iscurrvalue = {iscuurValue} setIsCurrValue={setIsCurrValue}/>
    </>
  )
}

export default Home