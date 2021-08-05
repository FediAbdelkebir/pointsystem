//const connection = require("./db");
const {Schema, model} = require('mongoose');

const societeSchema = new Schema({
    Nom: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 33,
        trim: true
    },
    Code: {
        type: String,
        required: true,
        trim: true
    },
    SUPAD: {
        type: String,
        min: 1,
        max: 120
    }
}, {
    //timestamps is necessary to createdAt and updatedat fields creation
    timestamps: true
});

module.exports = model('societe', societeSchema,'Societes');