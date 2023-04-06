const mongoose = require("mongoose");

const prefSchema = new mongoose.Schema({
    gender : {
        type : String,
        required : true
    },
    religion : {
        type : String,
        required : true
    },
    mothertongue : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    occupation : {
        type : String,
        required : true
    }
});

const Preference = new mongoose.model("Preference" , prefSchema);

module.exports = Preference;