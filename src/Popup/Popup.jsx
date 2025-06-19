import React, { useState } from "react";
import './Popup.css'

const Popup = ({ setIsCurrValue }) => {
  const [islogin, setIsLogin] = useState(false);

  return (
    <div className="popup">
      <form className="popup-input">
            <div className="popup-title">
              {islogin ? <h2>Login</h2> : <h2>Sign Up</h2>}
              <button onClick={() => setIsCurrValue(false)}>X</button>
            </div>
            <div className="input">
              {islogin === false ? (
                <input type="text" placeholder="name" required />
              ) : (
                <></>
              )}<br/>

              <input type="Email" placeholder="Email" required   /><br/>
              <input type="password" placeholder="password" required  /><br/>
            </div>
             <div className="check-box">
               <input type="checkbox" required />
               <p>i agree to all privacy & policy</p>
             </div>
            <div className="section">
              <p>
                Already have an account?{" "}
                {islogin ? (
                  <span onClick={()=>setIsLogin(false)}>sign Up</span>
                ) : (
                  <span onClick={() => setIsLogin(true)}>click here</span>
                )}
              </p>
            </div>
            <button className="submit_btn">Submit</button>
      </form>
    </div>
  );
};

export default Popup;
