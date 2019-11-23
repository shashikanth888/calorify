import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Typed from "react-typed";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Webcam from "react-webcam";

export default function LandingPage() {
  return (
    <header>
      {/* NavBar */}
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Calorify</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">1</Nav.Link>
          <Nav.Link href="#features">2</Nav.Link>
          <Nav.Link href="#pricing">3</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
      <br />

      <section id="section-a">
        <div className="container-fluid">
          <div className="typed_banner">
            <Typed
              style={{
                fontFamily: "'Tomorrow', sans-serif",
                fontSize: "40px",
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
                fontSize: "20px"
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
      {/* <Webcam /> */}
    </header>
  );
}
