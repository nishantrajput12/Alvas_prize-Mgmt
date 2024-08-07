<?php
include("dbconnect.php");
$key=$_GET['key'];
echo $key;
$delete="DELETE FROM manage where keycode=$key";
echo $delete;
$result=mysqli_query($conn,$delete);
if($result){
   header('location: view.php');


}
else
{
    echo "failed";
}
?>