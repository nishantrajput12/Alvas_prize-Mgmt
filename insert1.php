<?php
include("dbconnect.php");
$Image=$_POST["Image"];
$name=$_POST["name"];
$year=$_POST["year"];
$Event=$_POST["Event"];
$insert="INSERT INTO `sport`( `Image`, `name`, `year`, `Event`) VALUES ('$Image','$name','$Event','$Event')";
$result=mysqli_query($conn,$insert);
if($result){
   header('location: view.php');


}
else
{
    echo "failed";
}
?>