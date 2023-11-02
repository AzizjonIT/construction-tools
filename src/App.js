import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Totals from "./Pages/Totals/Totals.jsx";

function App() {
  console.clear();
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Totals/" element={<Totals />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
