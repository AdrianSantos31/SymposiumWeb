<?php
  //Starts the Session
  session_start();
  //Get the username and password
  $username = $_POST['username'];
  $password = $_POST['password'];
  //Session Username
  $_SESSION['username'] = $username;
  if($username == 'test' && $password == '123'){
    header("Location: index.html");
  }else{
    if($username == "" && $password ==""){
      header("Location: ../index.html?error=2");
    }else{
    header("Location: ../index.html?error=1");
  }
  }
 ?>
