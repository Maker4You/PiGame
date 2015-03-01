<?php 
	$conn = new mysqli('mysql16.000webhost.com','a7948566_CatchPI','m&oCatch','a7948566_CatchPI');

	// Check connection
	if ($conn->connect_error) {
		echo('error to upload the score');
		die("Connection failed: " . $conn->connect_error);
	} 
	else{
		if ($_GET['high_score']){
			$user = $_GET['username'];
			$score = $_GET['high_score'];
			$iduser = $_GET['iduser'];
			$user_array = mysqli_fetch_array(mysqli_query($conn,"SELECT FROM user_score WHERE name = '".$user."'"));
			$lastscore = $skin_name_array['score'];
			if($lastscore){
				if(abs($lastscore-M_PI) > abs($score-M_PI)){
					mysqli_query($conn,"UPDATE user_score SET score = '".$score."' WHERE name = '".$user."'");
				}
			}
			else{
				mysqli_query($conn,"INSERT INTO user_score VALUES (NULL,'" . $user . "'," . $score . ",". $iduser .")");
			}
		}
		$conn->close();
	}
?>