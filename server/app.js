var express = require("express");
var bodyparser = require("body-parser");
var app = express();
const request = require("request");
const Clarifai = require("clarifai");

const model = new Clarifai.App({ apiKey: "1f9bb490007547d4a0070b895e9487e2" });

var port = process.env.PORT || 3000;

// var firebase_controller = require("./controllers/firebase_cloud");
// firebase_controller(app);

const setup = () => {
  app.use(bodyparser.urlencoded({ extended: false }));
  app.use(bodyparser.json());
  app.get("/", (req, res) => res.send("Hello World!"));
  app.get("/api/imageurl", function(req, res) {
    url = req.query.url;
    detect(url);
    res.send(url);
  });
  app.post("/api/base64", (req, res) => {
    image = req.body.img;
  });
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
};

detect = url => {
  model.models
    .predict("bd367be194cf45149e75f01d59f77ba7", url)
    .then(response => {
      out = {
        name: response.outputs[0].data.concepts[0].name,
        confidence: response.outputs[0].data.concepts[0].value,
        address: "http://localhost:5000/?url=" + url
      };
      return out;
    })
    .then(make_req);
};

make_req = out => {
  request(out.address, { json: true }, (err, res, body) => {
    out.width = body.width;
    out.length = body.length;
    out.area = body.area;
    out.height = body.height;
    if (err) {
      console.log(err);
    }
  });
};

setup();
