//requied modules
const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
//database
require("./DB/db");

//required routes
const userRoutes = require("./routes/users");
const tacheRoutes = require("./routes/TacheRoutes");
const societeRoutes = require("./routes/SocietesRoutes");
const usertachesRoutes = require("./routes/UserTachesRoutes");
const userpointsRoutes = require("./routes/UserPointsRoutes");
const productsRoutes = require("./routes/products");
const categoriesRoutes = require("./routes/categories");
//express app init
const app = express();

//middlecares
app.use(bodyParser.json());
//app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());
app.options('*', cors())

//routes
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use("/users", userRoutes);
app.use("/taches", tacheRoutes);
app.use("/societes", societeRoutes);
app.use("/usertaches", usertachesRoutes);
app.use("/userpoints", userpointsRoutes);
app.use(`/products`, productsRoutes)
app.use(`/categories`, categoriesRoutes);




app.listen(4000, ()=>{
    console.log("Server is listening on port 4000....");
})