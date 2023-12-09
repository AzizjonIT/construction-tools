import React, { useEffect, useState } from "react";
import "./Totals.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Tabs from "../../components/Tabs/Tabs.jsx";

import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "react-use-cart";

const Totals = () => {
  const [Products, setProduct] = useState([]);

  const params = useParams();
  // const {  items, isEmpty, cartTotal, updateItemQuantity } = useCart();

  const { addItem } = useCart();

  // const handleDecrease = () => {
  //   const newQuantity = Products.quantity - 1;

  //   if (newQuantity >= 0) {
  //     updateItemQuantity(Products.id, newQuantity);
  //   }
  // };

  // const handleIncrease = () => {
  //   const newQuantity = Products.quantity + 1;

  //   // İhtiyaca göre miktar sınırlarını kontrol edebilirsiniz

  //   updateItemQuantity(Products.id, newQuantity);
  // };
  // j
useEffect(() => {
  axios
    .get(`http://localhost:9000/products/${params.productId}`)
    .then((response) => setProduct(response.data))
    .catch((error) => {
      console.error("Error fetching product data:", error);
      // Handle the error (e.g., show an error message to the user)
    });
}, [params.productId]);




  if (params.productId) {
    return (
      <React.Fragment key={Products.id}>
        <Navbar />
        <div className="container">
          <div className="totals_nav">
            <h5>Temperatur passiv</h5>
            <h5 className="totals_h3"> {Products.title}</h5>
          </div>
          <div className="total_products">
            <div className="total_images">
              <img
                className="total_images_img"
                src={process.env.PUBLIC_URL + "/images/" + Products.image}
                alt=""
              />
            </div>
            <div className="total_carts">
              <h4 className="total_carts_h4">
                1/4 High Cartbon Stainless Steel Terminal Crimping Tools Crimper
                Tools
              </h4>
              <div className="total_price">
                <h4 className="total_carts_h4">59,69 €</h4>
                <h6 className="total_price_p">
                  Prices include VAT plus shipping costs
                </h6>
              </div>
              <div className="availbea">
                <h5 className="total_carts_h4">
                  Immediately available, delivery time: 1-3 days
                </h5>
              </div>
              <h5 className="total_carts_h4">Leitungslänge</h5>
              <div className="meter">
                <h6 className="meter_h5">1.0 Meter</h6>
                <h6 className="meter_h5">1.0 Meter</h6>
                <h6 className="meter_h5">2.1 Meter</h6>
                <h6 className="meter_h5">1.0 Meter</h6>
                <h6 className="meter_h5">1.0 Meter</h6>
                <h6 className="meter_h5">1.0 Meter</h6>
              </div>
              <h5 className="total_carts_h4">Sensor</h5>
              <div className="meter_1">
                <h6 className="meter_h5_1">BYT81-110</h6>
                <h6 className="meter_h5_1">BYT81-210</h6>
                <h6 className="meter_h5_1">PT100 Class</h6>
                <h6 className="meter_h5_1">GRF20</h6>
                <h6 className="meter_h5_1">BYT8894NO</h6>
                <h6 className="meter_h5_1">UJKL</h6>
                <h6 className="meter_h5_1">BUYT81-110</h6>
                <h6 className="meter_h5_1">BUYT81-210</h6>
                <h6 className="meter_h5_1">PT100 class</h6>
                <h6 className="meter_h5_1">BNL90k</h6>
              </div>
              <div className="total_carts_buttons">
                {/* <div className="">
                  <button
                    onClick={(e) =>
                      updateItemQuantity(Products.id, Products.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <h1>{Products.quantity}</h1>
                  <button
                    onClick={(e) =>
                      updateItemQuantity(Products.id, Products.quantity + 1)
                    }
                  >
                    +
                  </button>
                  <div></div>
                </div> */}
                <div className="total_but">
                  <p className="total_but_p" onClick={() => addItem(Products)}>
                    In den Warenkorb
                  </p>
                </div>
              </div>
              <h5 className="total_carts_h4">Produktnummer: Tt-BN-88Y-T1000</h5>
            </div>
          </div>
          <div className="totals_tabs">
            <Tabs />
          </div>

          {/* Products */}
          {/* <Products /> */}
          {/* Footer */}
          <Footer />
        </div>
      </React.Fragment>
    );
  }
};

export default Totals;
