const mongoose = require('mongoose');
const {Schema} = require('mongoose');


const userSchema = new Schema({
    name: {
        type: String
    },
    address: {
        type: String
    },
    blood: {
        type: String
    },
    email: {
        type: String
    }, 
    password: {
        type: String
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;

