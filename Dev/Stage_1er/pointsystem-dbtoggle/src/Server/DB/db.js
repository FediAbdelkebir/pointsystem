const mongoose = require("mongoose");
const DB_URI = "mongodb+srv://Fedi:FediFad@pointssystem.a3ry5.mongodb.net/PointsSystem?retryWrites=true&w=majority";
const mongodbOptions = {useNewUrlParser: true, useUnifiedTopology: true,/* createIndexes: true,*/ useFindAndModify: false};

//mongodb database options
mongoose.set('useCreateIndex', true);
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);


mongoose.connect(DB_URI, mongodbOptions, (err)=>{
    if(err)
        console.error("DB Connection Error !")
});

const DB = mongoose.connection;

DB.once("open", ()=>{
    console.log("MongoDB Connected :)")
});

module.exports = DB;