const mongoose = require("mongoose")


const signup = new mongoose.Schema({

    username:{
        type: String,
    },
    password:{
        type: String,
    },


});

module.exports = mongoose.model("SignUp", signup);