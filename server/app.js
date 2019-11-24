var express = require("express");
var bodyparser = require("body-parser");
var app = express();
const request = require("request");
const Clarifai = require("clarifai");
var imgur = require("imgur");
const axios = require("axios");

const model = new Clarifai.App({ apiKey: "1f9bb490007547d4a0070b895e9487e2" });

var port = process.env.PORT || 4060;

var firebase_controller = require("./controllers/firebase_cloud");
firebase_controller(app);

const setup = () => {
  app.use(bodyparser.urlencoded({ extended: false }));
  app.use(bodyparser.json());

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  app.get("/", (req, res) => res.send("Hello World!"));
  app.get("/api/imageurl", function(req, res) {
    imgur
      .uploadFile("0img.jpeg")
      .then(function(json) {
        let url = json.data.link;
        url1 = "./server/0img.jpeg";
        url2 = "./server/1img.jpeg";

        detect(url, url1, url2, res);
        // console.log(json.data.link);
      })
      .catch(function(err) {
        console.error(err.message);
      });
  });
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
};

let detect = (url, url1, url2, res) => {
  model.models
    .predict("bd367be194cf45149e75f01d59f77ba7", url)
    .then(response => {
      out = {
        name: response.outputs[0].data.concepts[0].name,
        confidence: response.outputs[0].data.concepts[0].value,
        address: "http://localhost:5000/?url1=" + url1 + "&url2=" + url2
      };
      make_req(out, res);
    });
};

make_req = (out, res) => {
  axios.get(out.address).then(function(response) {
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
          name: body.foods[0].food_name,
          serving_weight_grams: body.foods[0].serving_weight_grams,
          calories: body.foods[0].nf_calories,
          total_fat: body.foods[0].nf_total_fat,
          saturated_fat: body.foods[0].nf_saturated_fat,
          cholesteral: body.foods[0].nf_cholesteral,
          sodium: body.foods[0].nf_sodium,
          carbs: body.foods[0].nf_total_carbohydrate,
          fiber: body.foods[0].nf_fiber,
          sugar: body.foods[0].nf_sugars,
          protein: body.foods[0].nf_protein,
          potassium: body.foods[0].nf_potassium
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
