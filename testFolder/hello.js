  var mysql = require('mysql');
  var express = require('express');
  var app = express();
  var path = require("path");

  app.use(express.static("public"));
  app.set('view engine', 'ejs');

  //sql connection
  var connection = mysql.createConnection({
    host  : 'localhost',
    user  : 'root',
    password  : 'Morcam@4',
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

  app.get("/", function(req, res){
    console.log("HomePage hit");
    //res.sendFile(path.join(__dirname+"/playerDBFun.html"));
    //q1(res, connection);
    q2(res, connection, 'n00900245');
    //res.render('index.ejs',{FIRSTNAME: 'Camron'});

  })

  app.get("/index", function(req, res){
    console.log("Index hit");

    q2(res, connection, 'n00900245');
  })

  app.get("/projects", function(req, res){
    console.log("projects hit");
    res.render('myProjects.ejs');

  })

  app.get("/myInfo", function(req, res){
    console.log("Info hit");
    res.redirect('/index');

  })


  app.listen(3000, function(){
    console.log('Serving Dog Demo on port 3000');
  });

  //connection.end();
