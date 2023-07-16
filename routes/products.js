var mongoose= require('mongoose');
var express = require('express');

var productSchema= mongoose.Schema({
    productname: String,
    price: String,
    productimage: String
  
  })

  module.exports=mongoose.model('products',productSchema);