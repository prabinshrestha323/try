const express = require("express");
const bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
const mongoose = require("mongoose");

const app = express();

require("./models/info");
const Info = mongoose.model("infos");

mongoose
  .connect("mongodb://localhost/try", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB is connected ........."))
  .catch(err => console.log(err));

//middleware bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//middleware bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/info", (req, res) => {
  const info = new Info();
  info.name = req.body.name;
  info.address = req.body.address;
  info.save(function(err, saveInfo) {
    if (err) {
      res.status(500).send({ err: "err" });
    } else {
      res.send(saveInfo);
    }
  });
});

app.get("/", (req, res) => {
  Info.find({}),
    function(err, infos) {
      if (err) {
        res.status(500).send({ err: "this is err" });
      } else {
        res.send(infos);
      }
    };
});

app.listen(200, (req, res) => {
  console.log("this is our server");
});
