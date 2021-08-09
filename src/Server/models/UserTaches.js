//const connection = require("./db");
const {Schema, model} = require('mongoose');

const usertachesSchema = new Schema({
    idtache: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 33,
        trim: true
    },
    iduser: {
        type: String,
        required: true,
        trim: true
    }
}, {
    //timestamps is necessary to createdAt and updatedat fields creation
    timestamps: true
});

module.exports = model('usertaches', usertachesSchema,'UserTaches');