var mongoose= require('mongoose');
var express = require('express');

var addressSchema= mongoose.Schema({
    name: String,
    email:String,
    number: Number,
    address:String,
    pincode: Number,
    city: String,
    state: String,
    country: String
})

module.exports=mongoose.model('addresses',addressSchema);