var mongoose= require('mongoose');
var express = require('express');

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
var plm= require('passport-local-mongoose');
mongoose.connect("mongodb://0.0.0.0:27017/kalakritii").then((result) => {
  console.log("connected to database")
}).catch((err) => {
  console.log(err)
});;
var userSchema= mongoose.Schema({
  username: String,
  password: String,
  name: String,
  phone: Number,
  token:{
    type:String,
    default:""
  },
  expire:{
    type: Number,
    default:0
  },
 wishlist:[{
  type:mongoose.Types.ObjectId,
  ref: "products",
  default: []
 }],
 Addtocart:[{
  type:mongoose.Types.ObjectId,
  ref:"products",
  default:[]
 }]

})
userSchema.plugin(plm);
module.exports=mongoose.model('user',userSchema);