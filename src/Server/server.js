//requied modules
const express = require('express');
const cors = require("cors");

//database
require("./DB/db");

//required routes
const userRoutes = require("./routes/userRoutes");
const tacheRoutes = require("./routes/tacheRoutes");

//express app init
const app = express();

//middlecares
app.use(express.urlencoded({extended: false}));
app.use(cors());

//routes

app.use("/users", userRoutes);
app.use("/taches", tacheRoutes);





app.listen(4000, ()=>{
    console.log("Server is listening on port 4000....");
})