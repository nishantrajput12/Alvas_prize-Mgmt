 <?php
include("dbconnect1.php");
$key=$_GET["key"];

$select="SELECT * FROM  sport where keycode=$key"
$result = mysqli_query($conn,$select);
while( $row=mysqli_fetch_array($result)){
  $Image=$_row["Image"];  
  $name=$_row["name"];
  $year=$_row["year"];
  $Event=$_row["Event"];
    

}
?> 






<!DOCTYPE html>
<html lang="en">

<head>
    <title>image</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
</head>
 <body>
 <div class=" container m-5 border p-3">
<form action="insert1.php" method="post">
<div class="mb-3">
<label for="exampleInputEmail1" class="form-label">Image</label>
 <input type="Image" class="form-control" id="exampleInptImage1" aria-describedby="Imagel"  name="Imagel"  value="<?php echo $Image ?>">
</div>



    <div class="mb-3 ">
    <label for="exampleInputname" class="form-label">NAME</label>

    <input type="name" class="form-control" id="exampleInputname" name="name" value="<?php echo $name ?>">
 </div>

 <div class="mb-3 ">
 <label for="exampleInputyear" class="form-label">year</label>

 <input type="year" class="form-control" id="exampleInputyear" name="year" value="<?php echo $year ?>">
</div>

<div class="mb-3 ">
<label for="exampleInputEvent" class="form-label">Event</label>

<input type="Event" class="form-control" id="exampleInputEvent" name="Event" value="<?php echo $Event ?>">
</div>

 
 
  
     <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</div>
 </body>
</html>