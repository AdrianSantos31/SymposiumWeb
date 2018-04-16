var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var app = express();
var path = require("path");
var wdir = "/SymposiumWeb/";


///// MYSQL CONNECTION ///////////////////////////////////////////


  var connection = mysql.createConnection({
    host  : 'localhost',
    user  : 'root',
    //WIP Testing
    password  : 'salimdbmaster',
    database: 'sympo',
    dateStrings : 'true'
  });


  //make connection
  connection.connect(function(err) {
    if(err) {
      console.error('error conecting: ' + err.stack);
      return;
    }
    console.log('connected as id:' + connection.threadId);
  });




/////   EXPRESS ////////////////////////////////////////////////////

  app.use(express.static("public"));

  app.set('view engine', 'ejs');


//redirect to index page
  app.get("/", function(req, res){
  console.log("homepage hit");
  //sess = req.session;
  //sess.id;
  res.redirect("/index")
})


//index page
  app.get("/index", function(req, res){
  console.log("homepage redirect");
  //sess.id = 'n00900245';
  res.render("index.ejs");
  
})

/////// Projects Page //////////////////////////////////////
 
//default page
  app.get("/projects", function(req, res){
    res.render("projectIndex.ejs");
    console.log('projectPageHit');
})

//alphbetical list
 app.get("/projects/alphabetical", function(req, res){
   res.render("projectAlphabetical.ejs");
   console.log("alphaprojects hits");
})


//Favorites list
 app.get("/projects/favorites", function(req, res){
    res.render("projectFavorites.ejs");
    console.log("favorites page hit");
})

//Section List
 app.get("/projects/sections", function(req, res){
   res.render("projectSections.ejs")
})
 



/////Student Login Pages //////////////////////////////////

//MyProjects page
  app.get("/myProjects", function(req, res){
  res.render("myProjects.ejs")
  console.log("projects page hit");
  console.log(sess.id);
})

//studentInfo Page
 app.get("/myInfo", function(req, res){
 res.render("myInfo.ejs", {FIRSTNAME: 'Camron'})
 console.log("myInfoHit");
})



//listen control
 app.listen(80, function(){
   console.log("Serving on port 80")   
})
