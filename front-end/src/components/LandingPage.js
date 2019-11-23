import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Typed from "react-typed";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Webcam from "react-webcam";
// import Jumbotron from "react-bootstrap/Jumbotron";

export default function LandingPage() {
  return (
    <header>
      {/* NavBar */}
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand style={{ textTransform: "Uppercase" }} href="#home">
          Calorify
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">1</Nav.Link>
          <Nav.Link href="#features">2</Nav.Link>
          <Nav.Link href="#pricing">3</Nav.Link>
        </Nav>
      </Navbar>

      {/* Banner */}
      <section id="section-a">
        <div className="container-fluid">
          <div className="typed_banner">
            <Typed
              style={{
                fontFamily: "'Tomorrow', sans-serif",
                fontSize: "60px",
                fontWeight: "100"
              }}
              strings={["Calorify..."]}
              typeSpeed={50}
              showCursor={false}
            />
            <br />
            <Typed
              style={{
                fontFamily: "'Tomorrow', sans-serif",
                fontSize: "30px"
              }}
              strings={["Estimate the food on your plate."]}
              typeSpeed={50}
              startDelay={800}
              showCursor={true}
            />
          </div>
          <br />
          <br />
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </div>
      </section>
    </header>
  );
}
