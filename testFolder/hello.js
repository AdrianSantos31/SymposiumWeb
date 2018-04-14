  var mysql = require('mysql');
  var express = require('express');
  var app = express();
  var path = require("path");

  //app.use(express.static("public"));
  app.set('view engine', 'ejs');


  //Initiates the SQL Connection

  var homepageHitNumber = 0;
  var indexHitNumber = 0;
  var projectsHitNumber = 0;
  var infoHitNumber = 0;


  var connection = mysql.createConnection({
    host  : 'localhost',
    user  : 'root',
    // //WIP Testing
    // password : 'Morcam@4',
    // database : 'sympo',
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

//samle querry

function q2(res, connection, ID){
  var myQ = "select s_name from presenters where nID = " + ID + ";";
  console.log('Gathering info from presenters');
  connection.query(myQ, function(error, results, fields){
    if(error) throw error;
    var firstName = results.s_name;
    res.render('myInfo.ejs', {FIRSTNAME: firstName});
  })
}

q2();

function sayHello(res){
  res.send("Hello There");
}


  app.get("../", function(req, res){
    console.log("HomePage hit: " + homepageHitNumber);
    homepageHitNumber++;
    res.sendFile("index.html");
    // res.render("")
    //res.sendFile(path.join(__dirname+"/playerDBFun.html"));
    //q1(res, connection);
    //q2(res, connection, 'n00900245');
    //res.render('index.ejs',{FIRSTNAME: 'Camron'});

  })
  //change to /studentLogIn/index
  app.get("/index", function(req, res){
    console.log("Index hit: " + indexHitNumber);
    indexHitNumber++;

    //q2(res, connection, 'n00900245');
  })

  app.get("/projects", function(req, res){
    console.log("Projects hit: " + projectsHitNumber);
    res.render('myProjects.ejs');

    projectsHitNumber++;

  })

  app.get("/myInfo", function(req, res){
    console.log("Info hit: " + infoHitNumber);
    res.redirect('/index');
    infoHitNumber++;

  })


  app.listen(3000, function(){
    console.log('Connected to Port 3000');
  });

  //connection.end();
