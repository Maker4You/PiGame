<?php 
	function sortdis($a,$b){
		return $a['distance'] -$b['distance'];
	}
	$conn = new mysqli('mysql16.000webhost.com','a7948566_CatchPI','m&oCatch','a7948566_CatchPI');
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	} 
	else{
			$userarr = array();
			$userarr = $_GET['arr'];
			$userarr1=mysqli_query($conn,"SELECT * FROM user_score WHERE iduser = '" .join("' OR iduser='",$userarr). "' ORDER BY score");
			while($row = mysqli_fetch_array($userarr1))
			{
			   $userarr[] = array(
			      'score' => $row['score'],
			      'name' => $row['name'],
			      'iduser' => $row['iduser'],
			      'distnace' => abs($row['score']-M_PI)
			   );
			}
			usort ($userarr,'sortdis');
			$top10 =array_values(array_slice($userarr,0,10));
			echo json_encode($top10);
	}
?>