import React from 'react'
import "./Brands.css"

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Navbar from "../../components/Navbar/Navbar.jsx"

import Contact from "../../components/Contact/Contact.jsx"

import Brandsproducts from '../../components/Brandsproducts/Brandsproducts';
import Footer from "../../components/Footer/Footer.jsx"

import Launch from "../../components/Launch.jsx"

const Brands = () => {
  return (
    <>
      <Navbar />
      <div className="containerr">
        <div className="brands_nav">
          <h5>Temperature passive</h5>
          <h5 className="brands_h5">Cylinder sensors</h5>
          <div className="button_launch">
            <Launch />
          </div>
        </div>
        <div className="brands">
          <div className="category_cart">
            
            <div className="category">
              <h6 className="category_1">Category</h6>
              <h6 className="category_h6">Laser sensors</h6>
              <hr className="brnds_hr" />
              <h6 className="category_h6">Position switches</h6>
              <hr className="brnds_hr" />
              <h6 className="category_h6">Cylinder sensors</h6>
              <hr className="brnds_hr" />
              <h6 className="category_h6">Magnet sensors</h6>
              <hr className="brnds_hr" />
              <h6 className="category_h6">Capacitive sensors</h6>
              <hr className="brnds_hr" />
              <h6 className="category_h6">Ultrasonic sensors</h6>
            </div>
            <div className="category">
              <h6 className="category__filter">Filter</h6>
              <DropdownButton
                id="dropdown-button-dark-example2"
                variant="secondary"
                title="Sensor"
                className="mt-2"
                data-bs-theme="dark"
              >
                <Dropdown.Item href="#/action-1" active>
                  Action
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
              </DropdownButton>

              <DropdownButton
                id="dropdown-button-dark-example2"
                variant="secondary"
                title="Price"
                className="mt-2"
                data-bs-theme="dark"
              >
                <Dropdown.Item href="#/action-1" active>
                  Action
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
              </DropdownButton>
              <DropdownButton
                id="dropdown-button-dark-example2"
                variant="secondary"
                title="Height"
                className="mt-2"
                data-bs-theme="dark"
              >
                <Dropdown.Item href="#/action-1" active>
                  Action
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
              </DropdownButton>

              <DropdownButton
                id="dropdown-button-dark-example2"
                variant="secondary"
                title="Weight"
                className="mt-2"
                data-bs-theme="dark"
              >
                <Dropdown.Item href="#/action-1" active>
                  Action
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
              </DropdownButton>
            </div>
            <div className="category_contact">
              <Contact />
            </div>
          </div>

          {/* filet */}

          <Brandsproducts />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Brands
