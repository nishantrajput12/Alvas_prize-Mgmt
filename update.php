<?php
include("dbconnect.php");
$key=$_GET["key"];
$name=$_POST["name"];
$email=$_POST["email"];
$phonenumber=$_POST["phonenumber"];
$message=$_POST["message"];
$update="UPDATE  `manage` SET `name`='$name',`email`='$email',`phonenumber`='$phonenumber',`message`='$message' WHERE `keycode`='$key'";
$result=mysqli_query($conn,$update);
if($result){
   header('location: view.php');


}
else
{
    echo "failed";
}
?>

