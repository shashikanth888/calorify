var express = require("express");
var bodyparser = require("body-parser");
var app = express();
const request = require("request");
const Clarifai = require("clarifai");

const model = new Clarifai.App({ apiKey: "1f9bb490007547d4a0070b895e9487e2" });

var port = process.env.PORT || 3000;

var firebase_controller = require("./controllers/firebase_cloud");
firebase_controller(app);

const setup = () => {
  app.use(bodyparser.urlencoded({ extended: false }));
  app.use(bodyparser.json());
  app.get("/", (req, res) => res.send("Hello World!"));
  app.get("/api/imageurl", function(req, res) {
    url1 = "PATH-TO-IMAGE/image1.jpg";
    url2 = "PATH-TO-IMAGE/image2.jpg";

    detect(url1, url2, res);
  });
  app.post("/api/base64", (req, res) => {
    image = req.body.img;
  });
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
};

let detect = (url1, url2, res) => {
  model.models
    .predict("bd367be194cf45149e75f01d59f77ba7", url1)
    .then(response => {
      out = {
        name: response.outputs[0].data.concepts[0].name,
        confidence: response.outputs[0].data.concepts[0].value,
        address: "http://localhost:5000/?url1=" + url1 + "&url2=" + url2
      };
      return out, res;
    })
    .then(make_req);
};

let make_req = (out, res) => {
  request(out.address, { json: true }, (err, res, body) => {
    out.width = body.width;
    out.length = body.length;
    out.area = body.area;
    out.height = body.height;
    if (err) {
      console.log(err);
    }
    console.log(body);
    calc_macro(out, res);
  });
};

let calc_macro = (out, res) => {
  volume = out.area * out.height;
  density_map = {
    apple: 0.2401,
    egg: 1.031,
    banana: 1,
    "chocolate bar": 1.325,
    default: 1
  };
  name = out.name;
  mass = density_map.name * volume || volume;
  request.post(
    {
      url: "https://trackapi.nutritionix.com/v2/natural/nutrients",
      json: {
        query: mass + " grams of " + out.name,
        timezone: "US/Eastern"
      },
      headers: {
        "Content-Type": "application/json",
        "x-app-id": "728a7023",
        "x-app-key": "f8e3dbfdcbf2ed6634fc902128695159"
      }
    },
    function(error, response, body) {
      if (!error && response.statusCode == 200) {
        macros = {
          name: foods[0].food_name,
          serving_qty: foods[0].serving_qty,
          serving_weight_grams: foods[0].serving_weight_grams,
          calories: foods[0].calories,
          total_fat: foods[0].total_fat,
          saturated_fat: foods[0].saturated_fat,
          cholesteral: foods[0].cholesteral,
          sodium: foods[0].sodium,
          carbs: foods[0].total_carbohydrate,
          fiber: foods[0].fiber,
          sugar: foods[0].sugars,
          protein: foods[0].protein,
          potassium: foods[0].potassium,
          nutrients: foods[0].nutrients,
          time_consumed: foods[0].consumed_at
        };
        save_food(macros);
        res.send(macros);
      }
    }
  );
};

let save_food = macros => {
  request.post(
    {
      url: "https://billwu95.api.stdlib.com/http-project@dev/warning/",
      json: {
        Potassium: parseFloat(macros.potassium),
        Suger: parseFloat(macros.sugar),
        Fiber: parseFloat(macros.fiber),
        Cholesterol: parseFloat(macros.cholesteral),
        SaturatedFats: parseFloat(macros.saturated_fat),
        Name: macros.name,
        ServingWeight: parseFloat(macros.serving_weight_grams),
        Fats: parseFloat(macros.total_fat),
        Carbohydrates: parseFloat(macros.carbs),
        Calories: parseFloat(macros.calories),
        Protein: parseFloat(macros.protein),
        Nutrients: macros.nutrients,
        Sodium: parseFloat(macros.sodium),
        Day: get_date()
      },
      headers: {
        "Content-Type": "application/json"
      }
    },
    function(error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log("Successfully saved object");
      }
    }
  );
};

let get_date = () => {
  var d = new Date(),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();
  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  return [year, month, day].join("-");
};

setup();
