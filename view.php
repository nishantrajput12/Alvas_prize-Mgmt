<!DOCTYPE html>
<html lang="en">

<head>
    <title>image</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
</head>
 <body>
    <div class="container m-1 p-3">
        <table class= "table table-striped table-hover">
           
            
  <thead>
    <tr>
      <th scope="col">name</th>
      <th scope="col">email</th>
      <th scope="col">phonenumber</th>
      <th scope="col">message</th>
      <th scope="col">delete </th>
      <th scope="col">edits</th>
    </tr>
  </thead>
  <?php include("dbconnect.php");
        $select = "SELECT * from manage ";
        $result=mysqli_query($conn,$select);
         while($row =mysqli_fetch_array($result))
         {

         

  ?>
  <tbody>
    <tr>

         <td> <?php echo $row['name'] ?></td>
         <td><?php echo $row['email'] ?> </td>
         <td><?php echo $row['phonenumber'] ?></td>
         <td><?php echo $row['message'] ?></td>
         <td> <a href="delete.php?key=<?php echo $row['keycode']?>">delete</a> </td>
         <td> <a href="edit.php?key=<?php echo $row['keycode']?>">edit</a></td>


    </tr>
    
  </tbody>
         <?php }?>
            
     </table>


    </div>
  </body>
</html>


