<?php

$user = 'root';
$password = '';
try {
  $handler = new PDO('mysql:host=localhost;dbname=ticwebsite',$user, $password);
  $handler->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e) {
 echo $e->getMessage();
 die();
}

$config['index_page'] = " ";
$config['uri_protocol'] = "AUTO";

?>