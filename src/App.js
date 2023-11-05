import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Totals from "./Pages/Totals/Totals.jsx";
import Brands from "./Pages/Brands/Brands.jsx";

function App() {

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Totals/" element={<Totals />} />
        <Route path="/Brands/" element={<Brands/>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
