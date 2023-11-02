import React from 'react'
import "./Footer.css"

import Twiter from "../Image/twiter.png"
import Facebook from "../Image/fecbook.png"
import Instagram from "../Image/instagram.png"
import Footericons from "../Image/footericons.png"

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer_1">
          <h5 className="footerh3">Service-Hotline</h5>
          <p className="footerh3">Telefonische Beratung unter:</p>
          <h5 className="footerh3">+49 (0) 771 / 175 131 69</h5>
          <h5 className="footerh3">Montag - Freitag:</h5>
          <p className="footerh3">08:00 - 12.00 Uhr</p>
          <p className="footerh3">13.00 - 17:00 Uhr</p>
        </div>
        <div className="footer_1">
          <h5 className="footerh3">Shop Service</h5>
          <p className="footerh3">AGB</p>
          <p className="footerh3">Contact</p>
          <p className="footerh3">Right of withdrawal</p>
          <p className="footerh3">FAQ</p>
          <p className="footerh3">Shipping and payment terms</p>
        </div>

        <div className="footer_1">
          <h5 className="footerh3">Informationen</h5>
          <p className="footerh3">Download area</p>
          <p className="footerh3">Imprint</p>
          <p className="footerh3">Data protection</p>
          <p className="footerh3">Newsletter</p>
          <p className="footerh3">Shipment </p>
        </div>

        <div className="footer_1">
          <h5 className="footerh3">Our Company</h5>
          <p className="footerh3">About Us</p>
          <p className="footerh3">Contact</p>
          <p className="footerh3">Guarantee</p>
          <div className="footer_icons">
            <img src={Twiter} alt="" />
            <img src={Facebook} alt="" />
            <img src={Instagram} alt="" />
            <img src={Footericons} alt="" />
          </div>
        </div>
      </footer>
      <div className="foter_title">
        <p>
          * All prices incl. Value added tax plus Versondox and, if applicable,
          cash on delivery charges, unless otherwise stated
        </p>
      </div>
    </>
  );
}

export default Footer
