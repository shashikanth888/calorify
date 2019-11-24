import React, { Component } from "react";
import Camera, { IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

export default class CalculateCalories extends Component {
  onTakePhoto(dataUri) {
    saveBase64AsFile(dataUri);
  }
  render() {
    return (
      <section id="section-b">
        <div className="container-fluid">
          <Camera
            imageType={IMAGE_TYPES.JPG}
            onTakePhoto={dataUri => {
              this.onTakePhoto(dataUri);
            }}
          />
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
