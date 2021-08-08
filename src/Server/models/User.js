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
    passwordHash: {
        type: String,
        min: 1,
        max: 120
    },
    city: {
        type: String,
        min: 1,
        max: 120
    }
    ,
    isAdmin: {
        type: Boolean,
        min: 1,
        max: 120
    }
    ,
    street: {
        type: String,
        min: 1,
        max: 120
    },
    apartement: {
        type: String,
        min: 1,
        max: 120
    }
    ,
    zip: {
        type: Number,
        min: 1,
        max: 120
    },
    country: {
        type: String,
        min: 1,
        max: 120
    },
    phone: {
        type: Number,
        min: 1,
        max: 120
    }
}, {
    //timestamps is necessary to createdAt and updatedat fields creation
    timestamps: true
});

module.exports = model('users', userSchema,'users');