import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Totals from "./Pages/Totals/Totals.jsx";
import Brands from "./Pages/Brands/Brands.jsx";
import Buy from "./Pages/Buy/Buy.jsx";

function App() {

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:productId" element={<Totals />} />
        <Route path="/Brands/" element={<Brands />} />
        <Route path="/buy/" element={<Buy/>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
