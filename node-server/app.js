const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const app = express();

const beerRoute = require("./routes/beerRoute");
const salesRoute = require("./routes/salesRoute");
const photosRoute = require("./routes/photosRoute");

mongoose.connect("mongodb://localhost:27017/MEAN-Basics", {useNewUrlParser: true, useUnifiedTopology : true}).then(() => console.log("Connected to MongoDB")).catch(error => console.error());

app.use(cors());
app.use(express.static('public'))
app.use(bodyParser.json());
app.use("/beers", beerRoute);
app.use("/sales", salesRoute);
app.use("/photos", photosRoute)
app.listen(8080);