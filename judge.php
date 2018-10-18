<?php 
    header("content-type:text/html;charset=utf-8");
    $con=mysql_connect("localhost","root","root");
    if(!$con){
   	die("Could not connect:".mysql_error());
   }
   mysql_select_db("mydata_db",$con);
   $name = $_POST['username'];
  $result=mysql_query("SELECT username FROM user");
  $data=array();
   while($row= mysql_fetch_array($result))
    {
      array_push($data,$row['username']);
    }
  //进行判断，数据对比
   $res = in_array($name,$data);
   if ($res == true) {
    echo "亲，名字重复了，不可用";
  }else {
    echo " 亲，名字可用！";
  }
   mysql_close($con); 
 ?>