
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"; // استيراد الأيقونة المطلوبة
import "./../../index.css"



export default function NavBarCom() {
  const [isSticky, setIsSticky] = useState(false);


  const handleScroll = () => {
    const screenHeight = window.innerHeight;
    if (window.scrollY >= screenHeight) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <Navbar
        expand="lg"
        className={`bg-white ra-nav-comp ${
          isSticky ? "rb-navbar-sticky" : "rb-navbar-fixed"
        }`}
      >
        <Container fluid>
          <Navbar.Brand className="rb-logo-nav" href="#">
            <img
              src="./../../../public/assetsProject/imges/LOGO.png"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className="rb-nav-link" to={"/"}>
                <h5>Home</h5>
              </Link>
              <Link className="rb-nav-link" to={"/Courses"}>
                <h5>Courses</h5>
              </Link>
              <Link className="rb-nav-link" to={"/Blog"}>
                <h5>Blog</h5>
              </Link>
              <h5>
                <NavDropdown
                  title="Page"
                  className="rb-Dropdown-nav"
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item className="rb-NavDropdown" href="#action4">
                    <Link className="rb-nav-link" to={"/Contact"}>
                      Contact
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="rb-NavDropdown" href="#action5">
                    <Link className="rb-nav-link" to={"/FAQs"}>
                      FAQs
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </h5>
              <Link className="rb-nav-link" to={"#"}>
                <h5>LearnPress Add-On</h5>
              </Link>
              <Link className="rb-nav-link" to={"#"}>
                <h5>Premium Theme</h5>
              </Link>
            </Nav>
            <div className="d-flex">
              <Link className="rb-log-reg" to={"/LoginRegister"}>
                Login / Register
              </Link>
              <button className="rb-search">
                <FontAwesomeIcon
                  className="rb-search-icon"
                  icon={faMagnifyingGlass}
                />
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}