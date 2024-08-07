<?php
include("dbconnect.php");
$name=$_POST["name"];
$email=$_POST["email"];
$phonenumber=$_POST["phonenumber"];
$message=$_POST["message"];
$insert="INSERT INTO `manage`( `name`, `email`, `phonenumber`, `message`) VALUES ('$name','$email','$phonenumber','$message')";
$result=mysqli_query($conn,$insert);
if($result){
   header('location: view.php');


}
else
{
    echo "failed";
}
?>