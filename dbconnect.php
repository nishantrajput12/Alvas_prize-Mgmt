<?php
$server="localhost";
$username="root";
$password="";
$dbname="trophy";
$conn=mysqli_connect($server,$username,$password,"$dbname");
if($conn->connect_error){
    die("connection failed");

}
echo "connection succesful";
?> 