<!DOCTYPE html>
<html>

<head>
	
</head>

<body>
	<center>
		<?php

		$conn = mysqli_connect("localhost", "root", "", "contact");
		
		// Check connection
		if($conn === false){
			die("ERROR: Could not connect. "
				. mysqli_connect_error());
		}
		
		// Taking all 5 values from the form data(input)
		$name = $_REQUEST['name'];
		$email = $_REQUEST['email'];
		$message = $_REQUEST['message'];
		
		$sql = "INSERT INTO user VALUES ('$name',
			'$email','$message')";
		
		if(mysqli_query($conn, $sql)){
			echo "<h3>data stored in the contact database successfully."
				. " Check the localhost php my admin"
				. " to view the updated data</h3>";

			echo nl2br("\n$name\n $email\n "
				. "$message");
		} else{
			echo "ERROR: Sorry $sql. "
				. mysqli_error($conn);
		}
		
		// Close connection
		mysqli_close($conn);
		?>
	</center>
</body>

</html>
