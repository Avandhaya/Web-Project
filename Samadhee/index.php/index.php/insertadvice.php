<!DOCTYPE html>
<html>
<body>

  <center>

<?php

include_once '../index.php/dbconnect.php';


$name=$_POST['name'];
$email=$_POST['email'];
$mobile=$_POST['mobile'];
$description=$_POST['description'];


//insert values to table advicedetails

$insert2="INSERT INTO advicedetails VALUES('$name','$email','$mobile','$description');";

if(mysqli_query($con,$insert2))
{
	echo "Details stored in database successfully!".mysqli_affected_rows($con);
	echo nl2br("\n$name\n $email\n ". "$mobile\n $description");
}
else
{
	echo "Failed to store data".mysqli_error($con);
}


mysqli_close($con);

?>

  </center>

</body>
</html>
