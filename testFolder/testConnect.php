
<?php
  $serverName = "139.62.210.135";
  $username = "root";
  $password = "salimdbmaster";
  $dbName = "Student";

  //Create connection
  $dbConnect = new mysqli($serverName, $username, $password, $dbName);
  if ($dbConnect->connect_error){
    die("Connection to the server failed");
  }
 ?>
