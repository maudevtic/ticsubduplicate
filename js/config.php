<?php
$user = 'dbo573581613';
$password = 'Gv290166';
try{
$handler = new PDO('mysql:host=db573581613.db.1and1.com;dbname=db573581613',$user, $password);
$handler->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e){
echo $e->getMessage();
die();
}

/*
    $host_name  = "db573123452.db.1and1.com";
    $database   = "db573123452";
    $user_name  = "dbo573123452";
    $password   = "Gv290166";

    $handler = mysqli_connect($host_name, $user_name, $password, $database) or die("Connection to MySQL Server failed: " . mysqli_connect_error());
*/

?>