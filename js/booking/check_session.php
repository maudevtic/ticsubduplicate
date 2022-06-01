<?php 
//$handler = new PDO('mysql:host=localhost;dbname=tic_database',$user, $password);
class check_session{

	public function loggedIn(){
		if(isset($_SESSION['email'])){
			return true;
		}
		else{
			return false;
		}
	}
	
	public function getLogInID($user_email){
	$data = $user_email;
    include ('php/config.php');
    $qry = $handler->prepare( "SELECT id FROM login WHERE email = ?");
    $qry->execute(array($data));
    $row = $qry->fetch(PDO::FETCH_ASSOC);
    $id = $row['id'];
	
	return $id;
	}
	
	public function getCompanyDetails($id){
	include ('php/config.php');
    $qry = $handler->prepare( "SELECT * FROM companydetails WHERE compID = ?");
    $qry->execute(array($id));
	$data = $qry->fetch(PDO::FETCH_ASSOC);
	 return $data;
	}
	
	public function getLogInEmail($id){
	include ('php/config.php');
    $qry = $handler->prepare( "SELECT * FROM login WHERE id = ?");
    $qry->execute(array($id));

    while($row = $qry->fetch(PDO::FETCH_ASSOC)){
      $email = $row['email'];
   	}
	
	return $email;
	}
}