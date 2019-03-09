const mongoose = require('mongoose');
const schema = mongoose.schema;

const userSchema = new schema({
    name: {
        type:String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true       
    },
    avatar: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    },

});

module.exports = User = mongoose.model('users', userSchema)