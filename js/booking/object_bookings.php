<?php 
//$handler = new PDO('mysql:host=localhost;dbname=tic_database',$user, $password);
class object_bookings{

	private $host="localhost";
	private $user="root";
	private $db="tic_database";
	private $pass="";
	private $conn;
	
	public function __construct(){
	$this->conn = new PDO("mysql:host=".$this->host."; dbname=".$this->db,$this->user,$this->pass);
	}
	
	//get inspection_summary
	public function getInsSum($id){
	$query = "SELECT
				inssum_id,
				inssum_compid,
				inssum_intrno,
				inssum_refnum,
				inssum_datebooked,
				inssum_dateins,
				inssum_dateship,
				inssum_service,
				inssum_factory,
				inssum_manday,
				inssum_cat,
				inssum_service_cat,
				inssum_status,
				pdfpath,
				report_path,
				inspection_result,
				status
			FROM
				inspect_summary
			WHERE
				inssum_id = :id";
	$stmt = $this->conn->prepare($query);
	$stmt->execute(array(':id'=>$id));
	$data = $stmt->fetch(PDO::FETCH_ASSOC);
	
	return $data;
	}
	
	public function getGenIndo($compid, $refnum){
	$query = "SELECT
				gen_compid,
				gen_refnum,
				gen_service,
				gen_datebooked,
				gen_insdate,
				gen_shipdate,
				gen_remark,
				gen_intrno
			FROM
				gen_info
			WHERE
				gen_compid=:compid AND gen_refnum=:refnum";
	
	$stmt = $this->conn->prepare($query);
	$stmt->execute(array('compid'=>$compid,'refnum'=>$refnum));
	$data = $stmt->fetch(PDO::FETCH_ASSOC);
	
	return $data;
	}
	
	//get factory details
	public function getFactory($compid, $intrno, $refnum){

	$query = "SELECT
				factory_id,
				factory_compid,
				factory_intrno,
				factory_refnum,
				factory_name,
				factory_address,
				factory_country,
				factory_city,
				factory_cperson,
				factory_cnum,
				factory_email
			FROM
				factory
			WHERE
				factory_compid = :compid AND factory_intrno = :intrno AND factory_refnum = :refnum";
	
	$stmt = $this->conn->prepare($query);
	$stmt->execute(array(':compid'=>$compid, ':intrno'=>$intrno,':refnum'=>$refnum));
	if (!$stmt->execute()) {
        $data = $stmt->errorInfo();
    }
	else{
		$data = $stmt->fetch(PDO::FETCH_ASSOC);
	}	
	return $data;
	}
	
	//get audit modules
	public function getAuditModules($compid, $intrno, $refnum){
	
	$query = "SELECT
				mod_co,
				mod_mgts,
				mod_ps,
				mod_qa,
				mod_ppm,
				mod_rnd,
				mod_cdep,
				mod_sa,
				mod_ce,
				mod_remarks
			FROM
				audit_modules
			WHERE
				mod_compid=:compid AND mod_intrno=:intrno AND mod_refnum=:refnum";
	
	$stmt = $this->conn->prepare($query);
	$stmt->execute(array(':compid'=>$compid, ':intrno'=>$intrno, ':refnum'=>$refnum));
	if (!$stmt->execute()) {
        $data = $stmt->errorInfo();
    }
	else{
		$data = $stmt->fetch(PDO::FETCH_ASSOC);
	}	
	return $data;
	}
	
	//get Product details
	public function getProduct($compid, $intrno, $refnum){
	
	$query = "SELECT
				product_id,
				product_compid,
				product_intrno,
				product_refnum,
				product_name,
				product_category,
				product_qty,
				product_unit,
				product_po,
				product_brand
			FROM
				product
			WHERE
				product_compid = :compid AND product_intrno = :intrno AND product_refnum = :refnum";
	
	$stmt = $this->conn->prepare($query);
	$stmt->execute(array(':compid'=>$compid,':intrno'=>$intrno,':refnum'=>$refnum));
	if (!$stmt->execute()) {
        $data = $stmt->errorInfo();
    }
	else{
		$data = $stmt->fetch(PDO::FETCH_ASSOC);
	}	
	return $data;
	}
	
	//get Multiple Products details
	public function getProducts($compid, $intrno, $refnum){
	
	$query = "SELECT
				product_id,
				product_compid,
				product_intrno,
				product_refnum,
				product_name,
				product_category,
				product_qty,
				product_unit,
				product_po,
				product_brand
			FROM
				product
			WHERE
				product_compid = :compid AND product_intrno = :intrno AND product_refnum = :refnum";
	
	$stmt = $this->conn->prepare($query);
	$stmt->execute(array(':compid'=>$compid,':intrno'=>$intrno,':refnum'=>$refnum));
	if (!$stmt->execute()) {
        $data = $stmt->errorInfo();
    }
	else{
		while($r = $stmt->fetch(PDO::FETCH_ASSOC)) {
		 $data[]=$r;
		}
	}	
	return $data;
	}
	
	//get product aql
	public function getProductAql($compid, $intrno, $refnum){
		
	$query = "SELECT 
				aql_compid,
				aql_intrno,
				aql_refnum,
				aql_genlvl,
				aql_spelvl,
				aql_min,
				aql_maj,
				aql_crit,
				aql_function,
				aql_genss,
				aql_spess
			FROM
				product_aql
			WHERE
				aql_compid = :compid AND aql_intrno = :intrno AND aql_refnum = :refnum
			";	
	
	$stmt = $this->conn->prepare($query);
	$stmt->execute(array(':compid'=>$compid,':intrno'=>$intrno,':refnum'=>$refnum));
	if(!$stmt->execute()){
		$data = $stmt->errorInfo();
	}
	else{
		$data = $stmt->fetch(PDO::FETCH_ASSOC);
	}
	
	return $data;
	}
	
	//get ispection other details
	public function getOtherDetails($compid, $intrno, $refnum){
	
	$query = "SELECT
				det_id,
				det_compid,
				det_intrno,
				det_refnum,
				det_refsample,
				det_courier,
				det_tn,
				det_changedate,
				det_addremarks
			FROM
				other_details
			WHERE
				det_compid = :compid AND det_intrno = :intrno AND det_refnum = :refnum";
	
	$stmt = $this->conn->prepare($query);
	$stmt->execute(array(':compid'=>$compid,':intrno'=>$intrno,':refnum'=>$refnum));
	if (!$stmt->execute()) {
        $data = $stmt->errorInfo();
    }
	else{
		$data = $stmt->fetch(PDO::FETCH_ASSOC);
	}
	return $data;
	}
	
	//get Product specification
	public function getProdSpecs($compid, $intrno, $refnum){
	
	$query = "SELECT
				spec_id,
				spec_compid,
				spec_intrno,
				spec_refnum,
				spec_cmf,
				spec_techspecs,
				spec_shipmark,
				spec_addinfo
			FROM
				product_specs
			WHERE
				spec_compid = :compid AND spec_intrno = :intrno AND spec_refnum = :refnum";
	
	$stmt = $this->conn->prepare($query);
	$stmt->execute(array(':compid'=>$compid,':intrno'=>$intrno,':refnum'=>$refnum));
	if (!$stmt->execute()) {
        $data = $stmt->errorInfo();
    }
	else{
		$data = $stmt->fetch(PDO::FETCH_ASSOC);
	}
	return $data;
	}
		
	//get uploaded attachments
	public function getUploads($compid, $intrno, $refnum){
	
	$query = "SELECT
				upload_id,
				upload_compid,
				upload_intrno,
				upload_refnum,
				upload_path
			FROM
				uploads
			WHERE
				upload_compid = :compid AND upload_intrno = :intrno AND upload_refnum = :refnum";
				
	$stmt = $this->conn->prepare($query);
	$stmt->execute(array(':compid'=>$compid,':intrno'=>$intrno,':refnum'=>$refnum));
	$data = [];
	if (!$stmt->execute()) {
        $data = $stmt->errorInfo();
    }
	else{	
		while($r = $stmt->fetch(PDO::FETCH_ASSOC)) {
		 $data[]=$r;
		}
	}
	return $data;
	}
	

}
?>