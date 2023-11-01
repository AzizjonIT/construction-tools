import React from 'react'
import "./Navbar.css"
import Navicon from "../Image/Navbar.png"
import Navlogo from "../Image/Navlogo.png"
import Navserach from "../Image/Navserach.png"
import Navuser from "../Image/Navuser.svg"
import Navbuy from "../Image/Navbuy.png"

const Navbar = () => {
  return (
    <>
      <div className="container">
        <nav>
          <div className="nav_numbers">
            <div className="nav_number_title">
              <img src={Navicon} alt="" />
              <p>0210545444</p>
            </div>
            <p>Contact Us </p>
            <p>About Us</p>
          </div>

          <div className="nav_logo">
            <div className="nav_logo_img">
              <img src={Navlogo} alt="" />
            </div>
            <div className="nav_inputs">
              <input className="nav_input" type="serach" />
              <img className="nav_input_img" src={Navserach} alt="" />
            </div>
            <div className="nav_users">
              <img src={Navuser} alt="" />
              <img src={Navbuy} alt="" />
            </div>
          </div>
          <div className="nav_menu">
              <p>Home</p>
              <p>Brands</p>
              <p>Trade-In Program</p>
              <p>Best Buy Outlet</p>
              <p>Druck</p>
              <p>Clearance Products</p>
              <p>Sonderposten</p>
              <p>Popular Brands</p>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar
