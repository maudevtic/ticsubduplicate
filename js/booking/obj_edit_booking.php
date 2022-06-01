<?php 
//$handler = new PDO('mysql:host=localhost;dbname=tic_database',$user, $password);
class obj_edit_booking{

	private $host="localhost";
	private $user="root";
	private $db="tic_database";
	private $pass="";
	private $conn;
	
	public function __construct(){
	$this->conn = new PDO("mysql:host=".$this->host."; dbname=".$this->db,$this->user,$this->pass);
	}
	
	//update inspection_summary
	public function editTestService($pid, $service){
	$query = "UPDATE
				inspect_summary
			SET
				inssum_service = :service
			WHERE
				inssum_id = :pid";
	$stmt = $this->conn->prepare($query);
	$stmt->execute(array(':pid'=>$pid,':service'=>$service));
	
	if($stmt){
		$data = 1;
	}
	else{
		$data = 2;
	}
	
	return $data;
	}
	
	//update inspection date
	public function editTestInsDate($pid, $insdate, $compid, $refnum){
	//$data = $pid ." | ".$insdate;
	$query = "UPDATE
				inspect_summary
			SET
				inssum_dateins = :insdate
			WHERE
				inssum_id = :pid";
	$stmt = $this->conn->prepare($query);
	$stmt->execute(array(':pid'=>$pid,':insdate'=>$insdate));
	
	if($stmt){
		$data1 = 1;
	}
	else{
		$data1 = 2;
	}
	
	$query2 = "UPDATE
				gen_info
			SET
				gen_insdate = :insdate
			WHERE
				gen_compid = :compid AND gen_refnum=:refnum";
	
	$stmt2 = $this->conn->prepare($query2);
	$stmt2->execute(array(':insdate'=>$insdate,':compid'=>$compid, ':refnum'=>$refnum));
	
	if($stmt){
		$data2 = 1;
	}
	else{
		$data2 = 2;
	}
	
	if($data1 == 1 AND $data2 == 1){
		$data = 1;
	}
	else{
		$data = 2;
	}
	
	return $data;
	}
	
	public function editTestShipDate($pid, $shipdate, $compid, $refnum){
	$query = "UPDATE
				inspect_summary
			SET
				inssum_dateship = :shipdate
			WHERE
				inssum_id = :pid";
	$stmt = $this->conn->prepare($query);
	$stmt->execute(array(':pid'=>$pid,':shipdate'=>$shipdate));
	
	if($stmt){
		$data1 = 1;
	}
	else{
		$data1 = 2;
	}
	
	$query2 = "UPDATE
				gen_info
			SET
				gen_shipdate = :shipdate
			WHERE
				gen_compid = :compid AND gen_refnum=:refnum";
	
	$stmt2 = $this->conn->prepare($query2);
	$stmt2->execute(array(':shipdate'=>$shipdate,':compid'=>$compid, ':refnum'=>$refnum));
	
	if($stmt){
		$data2 = 1;
	}
	else{
		$data2 = 2;
	}
	
	if($data1 == 1 AND $data2 == 1){
		$data = 1;
	}
	else{
		$data = 2;
	}
	
	return $data;
	}
	
	public function editRemDate($compid, $refnum, $remdate){
	
	$query = "UPDATE gen_info SET gen_remark=:remdate WHERE gen_compid = :compid AND gen_refnum=:refnum";
	$stmt = $this->conn->prepare($query);
	$stmt->execute(array(':remdate'=>$remdate, ':compid'=>$compid, ':refnum'=>$refnum));
	
	if($stmt){
		$data = 1;
	}
	else{
		$data = 2;
	}
	
	return $data;
	}
	
	public function editTestProduct($pname, $pcat, $qty, $unit, $po, $brand, $compid, $refnum, $intrno){
	$query = "UPDATE
				product
			SET
				product_name = :pname,
				product_category = :pcat,
				product_qty = :qty,
				product_unit = :unit,
				product_po = :po,
				product_brand = :brand
			WHERE
				product_compid = :compid AND product_intrno = :intrno AND product_refnum = :refnum";
				
	$stmt = $this->conn->prepare($query);
	$stmt->execute(array(':pname'=>$pname,':pcat'=>$pcat,':qty'=>$qty,':unit'=>$unit,':po'=>$po,':brand'=>$brand,':compid'=>$compid,':intrno'=>$intrno,':refnum'=>$refnum));
	
	if($stmt){
		$data = 1;
	}
	else{
		$data = 2;
	}
	
	return $data;
	}
	
	public function editTestProductSpecs($cmf, $tsr, $sm, $compid, $refnum, $intrno){
	$query = "UPDATE
				product_specs
			SET
				spec_cmf = :cmf,
				spec_techspecs = :tsr,
				spec_shipmark = :sm
			WHERE
				spec_compid = :compid AND spec_intrno = :intrno AND spec_refnum = :refnum";
				
	$stmt = $this->conn->prepare($query);
	$stmt->execute(array(':cmf'=>$cmf,':tsr'=>$tsr,':sm'=>$sm,':compid'=>$compid,':intrno'=>$intrno,':refnum'=>$refnum));
	
	if($stmt){
		//$data = $cmf ."|". $tsr ."|". $sm ."|". $compid ."|". $intrno ."|". $refnum;
		$data = 1;
	}
	else{
		$data = 2;
	}
	
	return $data;
	}
	
	public function editTestProductAql($ins_lvl, $sampsize, $spe_lvl, $sampsizespec, $min, $maj, $crit, $fn, $compid, $refnum, $intrno){
	$query = "UPDATE
				product_aql
			SET
				aql_genlvl = :inslvl,
				aql_spelvl = :spelvl,
				aql_min = :min,
				aql_maj = :maj,
				aql_crit = :crit,
				aql_function = :fn,
				aql_genss = :sampsize,
				aql_spess = :sampsizespec
			WHERE
				aql_compid=:compid AND aql_intrno=:intrno AND aql_refnum=:refnum";
	
	$stmt = $this->conn->prepare($query);
	$stmt->execute(array(':inslvl'=>$ins_lvl,':spelvl'=>$spe_lvl,':min'=>$min,':maj'=>$maj,':crit'=>$crit,':fn'=>$fn,':sampsize'=>$sampsize,':sampsizespec'=>$sampsizespec,':compid'=>$compid,':intrno'=>$intrno,':refnum'=>$refnum));
	
	if($stmt){
		$data = 1;
	}
	else{
		$data = 2;
	}
	
	return $data;
	}
	
	
	
	public function editTestRefSample($refsample, $compid, $intrno, $refnum){
	$query = "UPDATE
				other_details
			SET
				det_refsample = :refsample
			WHERE
				det_compid=:compid AND det_intrno=:intrno AND det_refnum=:refnum";
	
	$stmt = $this->conn->prepare($query);
	$stmt->execute(array(':refsample'=>$refsample, ':compid'=>$compid, ':intrno'=>$intrno, ':refnum'=>$refnum));

	if($stmt){
		$data = 1;
	}
	else{
		$data = 2;
	}
	
	return $data;
	}
	
	public function editTestCourier($courier, $compid, $intrno, $refnum){
	$query = "UPDATE
				other_details
			SET
				det_courier = :courier
			WHERE
				det_compid=:compid AND det_intrno=:intrno AND det_refnum=:refnum";
	
	$stmt = $this->conn->prepare($query);
	$stmt->execute(array(':courier'=>$courier, ':compid'=>$compid, ':intrno'=>$intrno,':refnum'=>$refnum));
	
	if($stmt){
		$data = 1;
	}
	else{
		$data = 2;
	}
	
	return $data;
	}
	
	public function editTestTN($tn, $compid, $intrno, $refnum){
	$query = "UPDATE
				other_details
			SET
				det_tn = :tn
			WHERE
				det_compid=:compid AND det_intrno=:intrno AND det_refnum=:refnum";
	
	$stmt = $this->conn->prepare($query);
	$stmt->execute(array(':tn'=>$tn, ':compid'=>$compid, ':intrno'=>$intrno,':refnum'=>$refnum));
	
	if($stmt){
		$data = 1;
	}
	else{
		$data = 2;
	}
	
	return $data;
	}
	
	public function editTestRem($rem, $compid, $intrno, $refnum){
	$query = "UPDATE
				product_specs
			SET
				spec_addinfo = :rem
			WHERE
				spec_compid = :compid AND spec_intrno = :intrno AND spec_refnum = :refnum";
	
	$stmt = $this->conn->prepare($query);
	$stmt->execute(array(':rem'=>$rem, ':compid'=>$compid, ':intrno'=>$intrno,':refnum'=>$refnum));
	
	if($stmt){
		$data = 1;
	}
	else{
		$data = 2;
	}
	
	return $data;
	}
	public function deleteTestUploaded($uploadedFile, $uploadedID){
	$query = "DELETE FROM
				uploads
			WHERE
				upload_id = :uploadedID AND upload_path = :uploadedFile";
				
	$stmt = $this->conn->prepare($query);
	$stmt->execute(array(':uploadedID'=>$uploadedID, ':uploadedFile'=>$uploadedFile));
	
	if($stmt){
		$data = 1;
		unlink($uploadedFile);
	}
	else{
		$data = 2;
	}
	
	return $data;
	}
	
	public function deleteTestProducts($productid){
	$query = "DELETE FROM 
				product
			WHERE
				product_id=:productid";
	
	$stmt = $this->conn->prepare($query);
	$stmt->execute(array(':productid'=>$productid));
	
	if($stmt){
		$data = 1;
	}
	else{
		$data = 2;
	}
	
	return $data;
	
	}
	
	public function uploadAttachment($id,$intrno,$refno,$dir){
	$stmt = $this->conn->prepare('INSERT INTO uploads (upload_compid,upload_intrno,upload_refnum,upload_path) VALUES (?,?,?,?)'); 
	$stmt->execute(array($id,$intrno,$refno,$dir));
	
	if($stmt){
		$data = 1;
	}
	else{
		$data = 2;
	}
	
	return $data;
	}
	
	public function editAuditModule($compid, $refnum, $intrno, $coMod, $mgtsMod, $psMod, $qaMod, $ppmMod, $rndMod, $cdepMod, $saMod, $ceMod, $remMod){
	$query = "UPDATE
				audit_modules
			SET
				mod_co = :comod,
				mod_mgts = :mgtsmod,
				mod_ps = :psmod,
				mod_qa = :qamod,
				mod_ppm = :ppmmod,
				mod_rnd = :rndmod,
				mod_cdep = :cdepmod,
				mod_sa = :samod,
				mod_ce = :cemod,
				mod_remarks = :remMod
			WHERE
				mod_compid=:compid AND mod_intrno=:intrno AND mod_refnum=:refnum";
	
	$stmt = $this->conn->prepare($query);
	$stmt->execute(array(':compid'=>$compid,':refnum'=>$refnum,':intrno'=>$intrno,':comod'=>$coMod, ':mgtsmod'=>$mgtsMod,':psmod'=>$psMod, ':qamod'=>$qaMod, ':ppmmod'=>$ppmMod, ':rndmod'=>$rndMod, ':cdepmod'=>$cdepMod, ':samod'=>$saMod, ':cemod'=>$ceMod, ':remMod'=>$remMod));
	
	if($stmt){
		$data = 1;
	}
	else{
		$data = 2;
	}
	
	return $data;
	}
	
	public function saveNewProduct($compid, $intrno, $refnum, $product_name, $category, $qty, $unit){
	$query = "INSERT INTO product (product_compid, product_intrno, product_refnum, product_name, product_category, product_qty, product_unit) VALUES (:compid,:intrno,:refnum,:productName,:category,:qty,:unit)";
	
	$stmt = $this->conn->prepare($query);
	$stmt->execute(array(':compid'=>$compid,':intrno'=>$intrno,':refnum'=>$refnum,':productName'=>$product_name,':category'=>$category,':qty'=>$qty,':unit'=>$unit));
	
	if($stmt){
		$data = 1;
	}
	else{
		$data = 2;
	}
	
	return $data;
	}
	
}