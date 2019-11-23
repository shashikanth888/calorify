var bodyparser = require("body-parser");
const vision = require("@google-cloud/vision");

const client = new vision.ImageAnnotatorClient();

module.exports = function(app) {
  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({ extended: true }));

  app.post("/api/imageurl", function(req, res) {
    url = req.body.url;
    detect_food(url);
    res.send("received");
  });
};

async function detect_food(url) {
  // Performs label detection on the image file
  const [result] = await client.labelDetection(url);
  const labels = result.labelAnnotations;
  console.log("Labels:");
  labels.forEach(label => console.log(label.description));
}
