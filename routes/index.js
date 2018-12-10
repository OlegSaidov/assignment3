var express = require('express'); // requiring express framework
var router = express.Router();   // creating a router

router.get('/', auth, function(req, res, next) { // when homepage is requested index view is rendered 
      res.render('index');
});

function auth(req,res, next){ // before you try to show user the homepage, check the auth middleware function, if the request .isAuthenticated() property is true, then skip to callback and render index.js  
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect('/users/login'); // Else redirect user to login page
}

module.exports = router; // ?
