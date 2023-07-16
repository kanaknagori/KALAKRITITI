var express = require('express');
var router = express.Router();
const passport = require('passport');
var userModel= require("./users");
var localStrategy= require("passport-local")
var GoogleStrategy = require('passport-google-oidc');
var FacebookStrategy = require('passport-facebook');
const multer= require('multer');
var path= require('path');
var crypto= require('crypto');
var alert= require('alert');
var users = require('./users')
const productModel= require('./products');
const addressModel= require('./addresses');
const Razorpay= require("razorpay");
// var instance = new Razorpay({
//   key_id: "rzp_test_PjcBfz4GnZ0ijL",
//   key_secret: "lmki4WP2fdl34d95lvNTJKKL",
// });
var instance = new Razorpay({
  key_id:'rzp_test_TPGCgE9IVZu4oL',
  key_secret: 'C7z9V4mfABxPliUqDCRiNvKX',
});

passport.use(new localStrategy(userModel.authenticate()));
// passport.use(new localStrategy(productModel.authenticate()));

// var maxsize=1*1024*1024;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/uploads')
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(14,function(err,buff){
      const fn=buff.toString("hex")+ path.extname(file.originalname);
      cb(null, fn);
    })
    
  },
  // onFileUploadStart: function(file,req,res){
  //   if(req.files.file.length > maxsize){
  //     return false;
  //   }
  // }
})
const upload = multer({ storage: storage, fileFilter: fileFilter })
function fileFilter (req, file, cb){
  if(file.mimetype=== 'image/png' || file.mimetype=== 'image/jpg' || file.mimetype=== 'image/jpeg' ){
    cb(null,true);
  }
  else{
    cb(null,false);
  }
}

require('dotenv').config();
/* GET home page. */

//google and facebook authentication
passport.use(new GoogleStrategy({
  clientID: process.env['GOOGLE_CLIENT_ID'],
  clientSecret: process.env['GOOGLE_CLIENT_SECRET'],
  callbackURL: '/oauth2/redirect/google',
  scope: ['email', 'profile' ]
}, async function verify(issuer, profile, cb) {
  console.log(profile);
  let User= await userModel.findOne({username:profile.emails[0].value});
  if(User){
    return cb(null,User);
  }else{
    let newUser= await userModel.create({username:profile.emails[0].value});
    newUser.save();
    return cb(null,newUser);
  }
}));

passport.use(new FacebookStrategy({
  clientID: process.env['FACEBOOK_CLIENT_ID'],
  clientSecret: process.env['FACEBOOK_CLIENT_SECRET'],
  callbackURL: '/oauth2/redirect/facebook',
  state: true,
  scope: ['username', 'profile' ]
}, async function verify(issuer, profile, cb) {
  console.log(profile);
  let User= await userModel.findOne({username:profile.usernames[0].value});
  if(User){
    return cb(null,User);
  }else{
    let newUser= await userModel.create({name:profile.displayName,username:profile.usernames[0].value});
    newUser.save();
    return cb(null,newUser);
  }
}));
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login/federated/google', passport.authenticate('google'));
router.get('/oauth2/redirect/google', passport.authenticate('google', {
  successRedirect: '/index2',
  failureRedirect: '/register'
}));
router.get('/login/federated/facebook', passport.authenticate('facebook'));
router.get('/oauth2/redirect/facebook', passport.authenticate('facebook', {
  successRedirect: '/index2',
  failureRedirect: '/login'
}));

//multer

router.post('/upload', upload.single("image"),function(req, res, next) {
  // userModel.findOne({username: req.session.passport.user})
  // .then(function(loggedinuser){
  //   loggedinuser.profileimage= req.file.filename;
  //   loggedinuser.save().then(function(){
  //     res.redirect('/product ');
  //   })

  // })
  try {
    productModel.create({
      productname:req.body.name,
      price: req.body.price,
      productimage: req.file.filename
    }).then(function(){
      res.redirect("/");
    })
  } catch (error) {
    console.log(error)
  }
});
router.get('/address' ,function(req,res){
  res.render("address");
})
router.post('/address',isLoggedIn,async function(req,res){
  let user= await users.findOne({username: req.session.passport.user});
  var cart_arr = [];
  cart_arr = user.Addtocart;

  var total=0;
  cart_arr.forEach(element => {
    total= parseInt(element.price)+total;
  });
  if(req.body.name=="" || req.body.number=="" || req.body.email=="" 
  || req.body.address=="" || req.body.pincode=="" || req.body.city=="" ||
  req.body.state=="" || req.body.country=="" ){
    alert("Fill the empty blocks");
    res.redirect("back");
  }
  else{
    addressModel.create({
      name:req.body.name,
      number:req.body.number,
      email:req.body.email,
      address:req.body.address,
      pincode: req.body.pincode,
      city:req.body.city,
      state: req.body.state,
      country: req.body.country
   
    })
    .then(function(data){
      console.log(data);
      res.render("back",{total})
    })
  }

})
router.get('/index2', function(req, res, next) {
  console.log('index2Page')
  res.render('index2');
});
router.get('/product', async function(req, res, next) {
   var products = await productModel.find();
  res.render('products', {products});
});
router.get('/login', function(req, res, next) {
  res.render('login');
});
router.get('/register', function(req, res, next) {
  res.render('register');
});
router.get('/forgot', function(req, res, next) {
  res.render('forgot');
});
router.get('/reset', function(req, res, next) {
  res.render('reset');
});

//register
router.post('/register', (req, res, next) => {
  var newUser = {
    //user data here
    username: req.body.username,
    files: []
    //user data here
  };
  users
    .register(newUser, req.body.password)
    .then((result) => {
      passport.authenticate('local')(req, res, () => {
        //destination after user register
        res.redirect('/index2');
      });
    })
    .catch((err) => {
      res.send(err);
    });
});

//login
router.post('/login',passport.authenticate('local',{
  successRedirect: '/index2',
  failureRedirect: '/login'
}),function(req,res,next){});

//logout
router.get('/logout', function(req,res,next){
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});
function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  else{
    res.redirect('/login');
  }
}
router.get('/', isLoggedIn, function(req,res,next){
  userModel.findOne({email: req.session.passport.user})
  .then(function(loggedinuser){
    res.render("index",{loggedinuser})
  });
  

})


// add item to wishlist
router.get('/wishlist/:prodid',isLoggedIn,async function(req,res){
  let user= await users.findOne({username: req.session.passport.user});
  let prodid= await productModel.findOne({_id:req.params.prodid});
  let alreayprod= await user.wishlist.indexOf(prodid._id);
     console.log(alreayprod);
     try{
     if(alreayprod=== -1){
      // let user= await users.findByIdAndDelete(prodid);
      user.wishlist.push(prodid);
    }
    else{
      
      user.wishlist.splice(alreayprod,1);
     
     }
    //  var users= await users.findOne({username:req.session.passport.user}).populate("wishlist");
    // console.log(user.wishlist.length)
     await user.save()
  }
  catch(error){
    console.log(error)
  }
  // res.render("wishlist",{users});
  res.redirect("back")
})

//wishlist route
router.get("/wishlist",isLoggedIn, async function(req,res,next){
  let user= await users.findOne({username: req.session.passport.user}).populate("wishlist");
  var wish_arr = [];
  wish_arr = user.wishlist;
  
  // res.send({wish_arr})
  res.render("wishlist", {wish_arr})
})

//add item to wishlist
router.get("/cart",isLoggedIn, async function(req,res,next){
  let user= await users.findOne({username: req.session.passport.user}).populate("Addtocart");
  var cart_arr = [];
  cart_arr = user.Addtocart;

  var total=0;
  cart_arr.forEach(element => {
    total= parseInt(element.price)+total;
  });
  var size= cart_arr.size;

  console.log(size);
  res.render("cart", {cart_arr,total})
})

//delete item from wishlist
router.get("/deleteWishlist/:prodid", isLoggedIn,async function(req,res){
  let user= await users.findOne({username: req.session.passport.user});
  let prodid= await productModel.findOne({_id:req.params.prodid});
  let alreayprod= await user.wishlist.indexOf(prodid._id);
  try{
    user.wishlist.splice(alreayprod,1);
    await user.save();
  }
  catch(error){
    console.log(error);
  }
   res.redirect("back");
})


//add item to cart
router.get('/addtocart/:prodid',isLoggedIn,async function(req,res){
  let user= await users.findOne({username: req.session.passport.user});
  let prodid= await productModel.findOne({_id:req.params.prodid});
  try{
     const alreayprod= user.Addtocart.indexOf(prodid._id);
    //  if(alreayprod!= -1){
    //   // let user= await users.findByIdAndDelete(prodid);
    //   user.Addtocart.splice(alreayprod,1);
    //  }
    //  else{
      user.Addtocart.push(prodid);
     
    //  }
    //  var users= await user.populate("wishlist");
     await user.save()
  }
  catch(error){
    console.log(error)
  }
  res.redirect("back");
})

// delete products from cart
router.get("/deleteprod/:prodid",isLoggedIn,async function(req,res){
let user= await users.findOne({username:req.session.passport.user});
let prodid= await productModel.findOne({_id:req.params.prodid});
let todelete= await user.Addtocart.indexOf(prodid._id);
console.log(prodid);
console.log(user.Addtocart);
try{
  //  await user.findByIdAndDelete(prodid);
  
    user.Addtocart.splice(todelete,1);
  
  
  await user.save();
}
catch(error){
  console.log(error)
}
res.redirect("back");
})

//payment gateway
router.post('/create/orderId',isLoggedIn, async function(req,res){
   let user= await users.findOne({username: req.session.passport.user}).populate("Addtocart");
   var cart_arr = [];
  cart_arr = user.Addtocart;

   var total=0;
    cart_arr.forEach(element => {
     total = total+  parseInt(element.price);
   });
   console.log("total",total);
  var options = {
    amount: parseInt(total*100),  // amount in the smallest currency unit
    currency: "INR",
    receipt: "order_rcptid_11"
  };
  instance.orders.create(options, function(err, order) {
    console.log(order);
    res.send(order);
  })
})
router.post("/api/payment/verify",isLoggedIn,async (req,res)=>{
  console.log(req.body.response)
  let body=req.body.response.razorpay_order_id + "|" + req.body.response.razorpay_payment_id;
 
   var crypto = require("crypto");
   var expectedSignature = crypto.createHmac('sha256', 'C7z9V4mfABxPliUqDCRiNvKX')
                                   .update(body.toString())
                                   .digest('hex');
                                   console.log("sig received " ,req.body.response.razorpay_signature);
                                   console.log("sig generated " ,expectedSignature);
   var response = {"signatureIsValid":"false"}
   if(expectedSignature === req.body.response.razorpay_signature){
    let user= await users.findOne({username: req.session.passport.user});
    console.log(user.username);
    user.Addtocart.splice(0,user.Addtocart.length);
    await user.save();
    console.log(user.Addtocart.length);
    response={"signatureIsValid":"true"}
  }
       res.send(response);
   });
module.exports = router;
