import React from "react";
import Navbar from "react-bootstrap/Navbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Typed from "react-typed";
import { Link } from "react-scroll";

// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Webcam from "react-webcam";
// import Jumbotron from "react-bootstrap/Jumbotron";

export default function LandingPage() {
  return (
    <header>
      <div>
        {/* NavBar */}
        <Navbar fixed="top" bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <Link
              style={{ textTransform: "Uppercase" }}
              activeClass="active"
              to="section-a"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Calorify
            </Link>
          </Navbar.Brand>

          <div id="main-button-group" className="d-flex flex-column">
            <ButtonGroup size="sm">
              <Link
                className="links btn"
                activeClass="active"
                to="section-b"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Calculate Calories
              </Link>
              <Link
                className="links btn"
                activeClass="active"
                to="section-c"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Know Your Nutrition History
              </Link>
              <Link
                className="links btn"
                activeClass="active"
                to="section-a"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Food Facts
              </Link>
              {/* <Button>Know Your Nutrition History</Button>
                <Button>Food Facts</Button> */}
            </ButtonGroup>
          </div>
        </Navbar>
      </div>

      {/* Banner */}
      <section id="section-a">
        <div id="section-a-innertext" className="container-fluid">
          <Typed
            style={{
              fontFamily: "'Tomorrow', sans-serif",
              fontSize: "110px",
              fontWeight: "100"
            }}
            strings={["Calorify"]}
            typeSpeed={50}
            showCursor={false}
          />
          <br />
          <Typed
            style={{
              fontFamily: "'Tomorrow', sans-serif",
              fontSize: "60px"
            }}
            strings={["Estimate the nutrients on your plate."]}
            typeSpeed={50}
            startDelay={800}
            showCursor={true}
          />

          <div id="headline">
            <p style={{ fontSize: "30px", fontFamily: "'Calistoga', cursive" }}>
              {" "}
              You Don't Need To Be <strong>Perfect</strong>. Just{" "}
              <strong>BE BETTER</strong> Than You Were Yesterday{" "}
            </p>
            <h1 style={{ display: "inline" }}>
              This Starts With Your <strong>Health!</strong>
            </h1>
          </div>
        </div>
      </section>
    </header>
  );
}
