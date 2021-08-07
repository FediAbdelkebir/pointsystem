//const connection = require("./db");
const {Schema, model} = require('mongoose');

const tacheSchema = new Schema({
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
    Description: {
        type: String,
        required: true,
        trim: true
    },
    Points: {
        type: Number,
        required: true,
        trim: true
    },
    Responsable: {
        type: String,
        required: true,
        trim: true
    },
    Etat: {
        type: String,
        required: true,
        trim: true
    },
}, {
    //timestamps is necessary to createdAt and updatedat fields creation
    timestamps: true
});

module.exports = model('tache', tacheSchema,'Taches');