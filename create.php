<?php 
    $con=mysql_connect("localhost","root","root");
    if(!$con){
   	die("Could not connect:".mysql_error());
   }
   if(mysql_query("CREATE DATABASE mydata_db",$con)){
   	echo "Database created";
   	echo "<br>";
   }
   else{
   	echo"Error creating dtabase:".mysql_error();
   }
     mysql_select_db("mydata_db",$con);
   $sql = "CREATE TABLE user(
   	username varchar(15),
   	passward varchar(15)
    )"; 
   if(mysql_query($sql,$con)){
   	echo"yes! table created";
   	echo "<br>";
   }
   else{
   	echo"no loser";
   	echo "<br>";
   }
   mysql_close($con); 
 ?>