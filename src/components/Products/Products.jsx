import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Products.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
const Products = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:9000/products`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  });

    return (
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        rewind={true}
        navigation={true}
        loop={true}

        className="mySwiper"
      >
        
          <main>
            <div className="products_cart">
              {Products.slice(0.7).map((Products) => {
                return (
                  <React.Fragment key={Products.id}>
                    <SwiperSlide>
                      <div className="products_shop">
                        <img
                          className="products_images"
                          src={
                            process.env.PUBLIC_URL + "/Images/" + Products.image
                          }
                          alt=""
                        />
                        <h5 className="products_h3"> {Products.title} </h5>
                        <h5 className="products_h2">17.09 €</h5>
                      </div>
                    </SwiperSlide>
                  </React.Fragment>
                );
              })}
            </div>
          </main>
     
     
      </Swiper>
    );
};

export default Products;
