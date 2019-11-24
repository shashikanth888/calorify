import React from "react";
import Navbar from "react-bootstrap/Navbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
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
      <div>
        {/* NavBar */}
        <div id="navbar">
          <Navbar fixed="top" bg="dark" variant="dark">
            <Navbar.Brand style={{ textTransform: "Uppercase" }} href="#home">
              Calorify
            </Navbar.Brand>

            <div id="main-button-group" className="d-flex flex-column">
              <ButtonGroup styel={{ margin: "auto" }} size="sm">
                <Button>Calculate Calories</Button>
                <Button>Know Your Nutrition History</Button>
                <Button>Food Facts</Button>
              </ButtonGroup>
            </div>

            {/* <div
              style={{ width: "100%" }}
              id="main-button-group"
              className="container mr-auto"
            >
              <button>Calculate Calories</button>
              <button>Know Your Nutrition History</button>
              <button>Food Facts</button>
            </div> */}
            {/* <Nav className="mr-auto">
              <Nav.Link classname="btn" href="#">
                Calculate Calories
              </Nav.Link>
              <Nav.Link href="#">Know Your Nutrition History</Nav.Link>
              <Nav.Link href="#">Food Facts</Nav.Link>
            </Nav> */}
          </Navbar>
        </div>
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
            strings={["Estimate the food on your plate."]}
            typeSpeed={50}
            startDelay={800}
            showCursor={true}
          />

          <div id="headline">
            <p style={{ fontSize: "30px", fontFamily: "'Calistoga', cursive" }}>
              {" "}
              You Don't Need To Be <strong>Perfect</strong>. Just{" "}
              <strong>BE BETTER</strong> Than You Were Yesterday{" "}
              <h1>
                This Starts With Your <strong>Health!</strong>
              </h1>
              .
            </p>
          </div>
        </div>
      </section>
    </header>
  );
}
