import axios from "axios";
import React, { useEffect, useState } from "react";

import "./Brandsproducts.css"
import { Link } from "react-router-dom";

const Brandsproducts = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:9000/products`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <>
      <main>
        <div className="brandsproducts_cart">
          {Products.slice(0.8).map((Products) => {
            return (
              <React.Fragment key={Products.id}>
                <div className="brandsproducts_shop">
                  <img
                    className="brandsproducts_images"
                    src={process.env.PUBLIC_URL + "/Images/" + Products.image}
                    alt=""
                  />
                  <h5 className="products_h3"> {Products.title} </h5>
                  <p className="brandsproducts_p"> {Products.text} </p>
                  <h5 className="products_h2">17.09 €</h5>
                  <Link className="products_link" to={`/products/${Products.id}`}>
                    <button className="products_button">Add to Cart</button>
                  </Link>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Brandsproducts;
