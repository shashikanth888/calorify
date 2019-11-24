import React, { Component } from "react";
import Camera, { IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import axios from "axios";
import { Link } from "react-scroll";

export default class CalculateCalories extends Component {
  state = {
    data: {}
  };
  continue = e => {
    e.preventDefault();
    axios.get(`http://localhost:4060/api/imageurl`).then(res => {
      this.props.handleChange(res.data);
    });
  };
  onTakePhoto(dataUri) {
    saveBase64AsFile(dataUri);
  }
  render() {
    return (
      <section id="section-b">
        <div className="container-fluid">
          <Camera
            id="camera-object"
            imageType={IMAGE_TYPES.JPG}
            onTakePhoto={dataUri => {
              this.onTakePhoto(dataUri);
            }}
          />

          <Link
            id="cc-submitButton"
            onClick={this.continue}
            type="submit"
            activeClass="active"
            to="section-c"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Submit
          </Link>
        </div>
      </section>
    );
  }
}
let i = 0;
const saveBase64AsFile = base64 => {
  var link = document.createElement("a");
  link.setAttribute("href", base64);
  link.setAttribute("download", `${i}img`);
  link.click();
  i ? (i = 0) : (i = i + 1);
};
