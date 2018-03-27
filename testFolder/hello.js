  var mysql = require('mysql');
  var express = require('express');
  var app = express();
  var path = require("path");

  //app.use(express.static("public"));
  app.set('view engine', 'ejs');

<<<<<<< HEAD
  //Initiates the SQL Connection
=======
  var homepageHitNumber = 0;
  var indexHitNumber = 0;
  var projectsHitNumber = 0;
  var infoHitNumber = 0;


  //sql connection
  // var connection = mysql.createConnection({
  //   host  : 'localhost',
  //   user  : 'root',
  //   password  : 'Morcam@4',
  //   database: 'sympo',
  //   dateStrings : 'true'
  // });


//Initiates the SQL Connection
>>>>>>> 06a93702ead8438a7c52d831f22a70fc82a8641d
//   var connection = mysql.createConnection({
//     host  : 'localhost',
//     user  : 'root',
//     password  : 'Morcam@4',
//     database: 'sympo',
//     dateStrings : 'true'
//   });
<<<<<<< HEAD
// //make connection
//   connection.connect(function(err) {
//     if(err) {
//       console.error('error conecting: ' + err.stack);
//       return;
//     }
//     console.log('connected as id:' + connection.threadId);
//   });
//
=======

//make connection
  // connection.connect(function(err) {
  //   if(err) {
  //     console.error('error conecting: ' + err.stack);
  //     return;
  //   }
  //   console.log('connected as id:' + connection.threadId);
  // });

>>>>>>> 06a93702ead8438a7c52d831f22a70fc82a8641d

//samle querry

function q2(res, connection, ID){
  var myQ = "select * from presenters where nID = 'n00900245';";
  console.log('Gathering info from presenters');
  connection.query(myQ, function(error, results, fields){
    if(error) throw error;
    var firstName = results.firstN;
    res.render('myInfo.ejs', {FIRSTNAME: 'Camron'});
  })
}

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
<<<<<<< HEAD
=======
    projectsHitNumber++;

>>>>>>> 06a93702ead8438a7c52d831f22a70fc82a8641d
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
