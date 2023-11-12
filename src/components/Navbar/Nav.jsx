import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function NavScrollExample() {

  const [Products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:9000/products`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  },[]);

  return (
    <Navbar expand="lg" className="me_navb">
      <Container fluid className="fluid">
        <Navbar.Toggle id="togle" aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="nav_link" to={"/"}>
              <p>Home</p>
            </Link>
            <Link className="nav_link" to={"/Brands/"}>
              <p>Brands</p>
            </Link>
            <p>Best Buy Outlet</p>
            <p>Druck</p>
            <p>Clearance Products</p>
            <p>Sonderposten</p>
            <p>Popular Brands</p>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
