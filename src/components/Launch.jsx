import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";


import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Contact from "../components/Contact/Contact.jsx";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="launch_but" style={{ width: "100px" } } variant="primary" onClick={handleShow}>
        Category
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Category</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
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
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;
