<?php
   $con = mysql_connect("localhost","root","root");
   if(!$con){
    die("Could not connect:".mysql_error());
   }
   $username=$_POST['username'];
   $passward=$_POST['passward'];
   mysql_select_db("mydata_db",$con);
   $insert="INSERT INTO user (username, passward) VALUES ({$username}, {$passward})";
   if(mysql_query($insert)){
    echo "成功注册";
   }
   mysql_close($con);
 ?>