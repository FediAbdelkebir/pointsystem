//requied modules
const express = require('express');
const cors = require("cors");

//database
require("./DB/db");

//required routes
const userRoutes = require("./routes/UserRoutes");
const tacheRoutes = require("./routes/TacheRoutes");
const societeRoutes = require("./routes/SocietesRoutes");
const usertachesRoutes = require("./routes/UserTachesRoutes");
const userpointsRoutes = require("./routes/UserPointsRoutes");
//express app init
const app = express();

//middlecares
//app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

//routes

app.use("/users", userRoutes);
app.use("/taches", tacheRoutes);
app.use("/societes", societeRoutes);
app.use("/usertaches", usertachesRoutes);
app.use("/userpoints", userpointsRoutes);





app.listen(4000, ()=>{
    console.log("Server is listening on port 4000....");
})