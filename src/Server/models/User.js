//const connection = require("./db");
const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 33,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    enrollnumber: {
        type: Number,
        min: 1,
        max: 120
    }
}, {
    //timestamps is necessary to createdAt and updatedat fields creation
    timestamps: true
});

module.exports = model('users', userSchema);