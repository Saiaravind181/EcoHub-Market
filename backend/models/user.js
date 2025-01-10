const mongoose = require("mongoose");
// Assuming this is the path to your cartReqModel file

const UserSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    verified:{
        type:Boolean,
        default:false},
    cart: [], 
    buyCart:[],
    boughtProducts:[]// Use the imported cartReqSchema here
});

const User = mongoose.model("marketUsers", UserSchema);

module.exports = User;
