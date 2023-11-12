import React from 'react'
import "./Home.css"
import Navbar from "../../components/Navbar/Navbar.jsx"
import Footer from "../../components/Footer/Footer.jsx"
import Products from '../../components/Products/Products'

import Home1 from "../../Img/Home1.png"
import chexbox from "../../Img/chekbox.png"
import chexbox1 from "../../Img/chexbox1.png"
import Contact from '../../components/Contact/Contact'
import Handtool1 from "../../Img/handtool1.png"
import Handtool2 from "../../Img/Home2.png"

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="containerr">
        <div className="home_images">
          <div className="home_images_1">
            <img className="home_images_1_img" src={Home1} alt="" />
          </div>
          <div className="home_images_2">
            <h2 className="home_img_h21">Rubber Handle</h2>
            <h4 className="home_img_h2">
              Rubber Handle Cutting <br /> Plier Sharp-Nose Pliers{" "}
            </h4>
          </div>
        </div>
        <div className="home_header">
          <div className="home_header_contack">
            <Contact />
          </div>
          <div className="header_p">
            Lorem ipsum is a pseudo-Latin text used in web design, typography,
            layout, and printing in place of English to emphasise design
            elements over content. It's also called placeholder (or filler)
            text. It's a convenient tool for mock-ups. It helps to outline the
            visual elements of a document or presentation, eg typography, font,
            or layout. Lorem ipsum is mostly a part of a Latin text by the
            classical author and philosopher Cicero. Its words and letters have
            been changed by addition or removal, so to deliberately render its
            content nonsensical; it's not genuine, correct, or comprehensible
            Latin anymore. While lorem ipsum's still resembles classical Latin,
            it actually has no meaning whatsoever. As Cicero's text doesn't
            contain the letters K, W, or Z, alien to latin, these, and others
            are often inserted randomly to mimic the typographic appearence of
            European languages, as are digraphs not to be found in the origina{" "}
            <br /> <br />
            Lorem ipsum is a pseudo-Latin text used in web design, typography,
            layout, and printing in place of English to emphasise design
            elements over content. It's also called placeholder (or filler)
            text. It's a convenient tool for mock-ups. It helps to outline the
            visual elements of a document or presentation.
          </div>
        </div>
        {/*  advantages_cart  */}
        <div className="advantages_cart">
          <h4 className="advantages_cart_h1">Our advantages:</h4>
          <div className="advantages">
            <div className="advantages_1">
              <div className="advantages_1_ch">
                <img src={chexbox} alt="" />
                <h6>Produkte Made In USA</h6>
              </div>
              <div className="advantages_1_ch">
                <img src={chexbox} alt="" />
                <h6>Own production</h6>
              </div>
              <div className="advantages_1_ch">
                <img src={chexbox} alt="" />
                <h6>Production and shipping in-house</h6>
              </div>
            </div>
            <div className="advantages_1">
              {" "}
              <div className="advantages_1_ch">
                <img src={chexbox} alt="" />
                <h6>Constantly growing range</h6>
              </div>
              <div className="advantages_1_ch">
                <img src={chexbox} alt="" />
                <h6>Short delivery time</h6>
              </div>
              <div className="advantages_1_ch">
                <img src={chexbox} alt="" />
                <h6>Highest level of competence </h6>
              </div>
            </div>
            <div className="advantages_1">
              {" "}
              <div className="advantages_1_ch">
                <img src={chexbox} alt="" />
                <h6>Large quantities with low</h6>
              </div>
              <div className="advantages_1_ch">
                <img src={chexbox1} alt="" />
                <h6>
                  Custom-made products are possible from <br /> small quantities
                </h6>
              </div>
            </div>
          </div>
        </div>

        <Products />

        {/*  Hand Tool   */}
        <div className="Hand_Tool">
          <div className="hand_tool_cart">
            <h4 className="hand_tool_h2"> Hand Tool </h4>
            <p className="hand_tool_p">Here you will find temperature</p>
            <p className="hand_tool_p">sensors with a</p>
            <p className="hand_tool_p"> passive measuring </p>
            <p className="hand_tool_p"> element (resistance sensor) in</p>
            <p className="hand_tool_p">different designs</p>
            <button className="hand_tool_but">Details</button>
          </div>
          <div className="hand_tool_cart_img">
            <img className="hand_tool_cart_img_1" src={Handtool1} alt="" />
          </div>

          <div className="hand_tool_cart">
            <h4 className="hand_tool_h2"> Hand Tool </h4>
            <p className="hand_tool_p">Here you will find temperature</p>
            <p className="hand_tool_p">sensors with a</p>
            <p className="hand_tool_p"> passive measuring </p>
            <p className="hand_tool_p"> element (resistance sensor) in</p>
            <p className="hand_tool_p">different designs</p>
            <button className="hand_tool_but">Details</button>
          </div>

          <div className="hand_tool_cart_img">
            <img className="hand_tool_cart_img_1" src={Handtool2} alt="" />
          </div>
        </div>

        {/* Footer */}

        <Footer />
      </div>
    </>
  );
}

export default Home
