import React from "react";
import "./Totals.css";


import Navbar from "../../components/Navbar/Navbar.jsx";
import Products from "../../components/Products/Products.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Tabs from "../../components/Tabs/Tabs.jsx"
const Totals = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <div className="totals_nav">
          <h5>Temperatur passiv</h5>
          <h5 className="totals_h3"> Kabelfuehler</h5>
        </div>

        <div className="totals_tabs">
          <Tabs />
        </div>

        {/* Products */}
        <Products />
        {/* Footer */}
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Totals;
