var bodyparser = require('body-parser');
const vision = require("@google-cloud/vision");
const image2base64 = require('image-to-base64');


const client = new vision.ImageAnnotatorClient();

module.exports = function(app) {
  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({ extended: true }));
  
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.get("/api/test", function(req, res) {
    //console.log(req.body.url);
    //url = req.body.url;
    //detect_food(url);
    macros = {
      name: "apple",
      serving_qty: "1",
      serving_weight_grams: "90g",
      calories: "230",
      total_fat: "20",
      saturated_fat: "15",
      cholesteral: "18",
      sodium: "12",
      carbs: "33",
      fiber: "17",
      sugar: "42",
      protein: "23",
      potassium: "08",
      nutrients: "46",
      time_consumed: "23-11-2019"
    };
    res.send(macros);
  });

  app.get('/api/testimage', function(req,res){
    console.log("testing...");
    image2base64("E:/hackwestern/apple.jpg") // you can also to use url
    .then(
        (response) => {
            console.log(response); //cGF0aC90by9maWxlLmpwZw==
        }
    )
    .catch(
        (error) => {
            console.log(error); //Exepection error....
        }
    )
  });
};

async function detect_food(url) {
  // Performs label detection on the image file
  const [result] = await client.labelDetection(url);
  const labels = result.labelAnnotations;
  console.log("Labels:");
  labels.forEach(label => console.log(label.description));
}
