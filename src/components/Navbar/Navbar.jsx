import React from 'react'
import "./Navbar.css"
import Navicon from "../Image/Navbar.png"
import Navlogo from "../Image/Navlogo.png"
// import Navserach from "../Image/Navserach.png"
import Navuser from "../Image/Navuser.svg"
import Navbuy from "../Image/Navbuy.png"
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <>
      <nav className="nav_conte">
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
          </div>
          <div className="nav_users">
            <Link to={"/"}>
              <img src={Navuser} alt="" />
            </Link>
            <Link to={"/Totals/"}>
              <img src={Navbuy} alt="" />
            </Link>
          </div>
        </div>
        <div className="nav_menu">
          <Link className="nav_link" to={"/"}>
            <p>Home</p>
          </Link>
          <Link className="nav_link" to={"/Brands/"}>
            <p>Brands</p>
          </Link>
          <Link className="nav_link" to={"/Totals/"}>
            <p>Trade-In Program</p>
          </Link>
          <p>Best Buy Outlet</p>
          <p>Druck</p>
          <p>Clearance Products</p>
          <p>Sonderposten</p>
          <p>Popular Brands</p>
        </div>
      </nav>
    </>
  );
}

export default Navbar

