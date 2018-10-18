<?php
   $con = mysql_connect("localhost","root","root");
   if(!$con){
    die("Could not connect:".mysql_error());
   }
   mysql_select_db("mydata_db",$con);
   $result=mysql_query("SELECT * FROM user");
   while($row= mysql_fetch_array($result))
    {
      echo $row['username'].' '.$row['passward'];
      echo "<br/>";
    }
    mysql_close($con); 
?>   