<?php
include("dbconnect.php");
$key=$_GET["key"];

$select="SELECT * from manage where keycode = $key";
$result = mysqli_query($conn,$select);
while( $row=mysqli_fetch_array($result)){
    $name=$row["name"];
    $email=$row["email"];
$phonenumber=$row["phonenumber"];
$password=$row["message"];
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
<form action="update.php?key=<?php echo $key?>" method="post">
    <div class="mb-3 ">
    <label for="exampleInputname" class="form-label">NAME</label>

    <input type="name" class="form-control" id="exampleInputname" name="name" value="<?php echo $name ?>">
 </div>

  <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
         <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="email"  name="email"  value="<?php echo $email ?>">
  </div>
  <div class="mb-3">
    <label for="exampleInputphonenumber" class="form-label">PHONENUMBER</label>
    <input type="phonenumber" class="form-control" id="exampleInputphonenumber" name="phonenumber" value="<?php echo $phonenumber ?>" >
    
  </div>

  <div class="mb-3">
    <label for="exampleInputmessage" class="form-label">message</label>
    <input type="message" class="form-control" id="exampleInputmessage" name="message" value="<?php echo $message ?>">
  </div>
  
     <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</div>
 </body>
</html>