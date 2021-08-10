//const connection = require("./db");
const {Schema, model} = require('mongoose');

const userpointsSchema = new Schema({
    iduser: {
        type: String,
        required: true,
        unique:true,
        dropDups: true,
        minlength: 3,
        maxlength: 33,
        trim: true
    },
    points: {
        type: Number,
        required: true,
        trim: true
    }
}, {
    //timestamps is necessary to createdAt and updatedat fields creation
    timestamps: true
});

module.exports = model('userpoints', userpointsSchema,'UserPoints');