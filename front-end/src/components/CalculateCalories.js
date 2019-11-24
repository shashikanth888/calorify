import React, { Component } from "react";
import Camera, { IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class CalculateCalories extends Component {
  componentDidMount() {
    axios.get(`http://localhost:4060/api/imageurl`).then(res => {
      console.log(res);
    });
    fetch("http://localhost:4060/api/imageurl").then(response => {
      console.log(response.json());
    });
  }
  onTakePhoto(dataUri) {
    saveBase64AsFile(dataUri);
  }
  render() {
    const { handleChange } = this.props;

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
          <Button id="cc-submitButton" type="submit" onClick={this.continue}>
            Submit
          </Button>
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
