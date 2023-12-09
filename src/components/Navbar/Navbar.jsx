import React, { useState } from 'react'
import "./Navbar.css"
import Navicon from "../Image/Navbar.png"
import Navlogo from "../Image/Navlogo.png"
import Navuser from "../Image/Navuser.svg"
import Navbuy from "../Image/Navbuy.png"
import { Link } from 'react-router-dom'

import Nav from "./Nav.jsx"

const Navbar = () => {

 const [inputText, setInputText] = useState("");
 const [filteredText, setFilteredText] = useState("");

 const handleInputChange = (event) => {
   const text = event.target.value;
   setInputText(text);

   // Filtreleme işlemini gerçekleştirin (örneğin, boşlukları kaldırın)
   const filtered = text.replace(/\s/g, ""); // Bu örnekte boşlukları kaldırıyoruz
   setFilteredText(filtered);
 };


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
         
          <div className="nav_users">
            <Link to={"/"}>
              <img src={Navuser} alt="" />
            </Link>
            <Link to={"/"}>
              <img src={Navbuy} alt="" />
            </Link>
          </div>
        </div>
        <div className="nav_menu">
          <Nav />
        </div>
      </nav>
    </>
  );
}

export default Navbar
