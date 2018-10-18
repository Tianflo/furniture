<?php 
    header("content-type:text/html;charset=utf-8");
    $con=mysql_connect("localhost","root","root");
    if(!$con){
   	die("Could not connect:".mysql_error());
   }
   mysql_select_db("mydata_db",$con);
   $username = $_POST['username'];
   $passward=$_POST['passward'];
  
  if($username==null||$passward==null){
        echo '用户名或者密码为空';
      }else{
         $result=mysql_query("select * from user where username={$username}");
   $data=array();
   while($row= mysql_fetch_array($result))
    {
      array_push($data,$row['passward']);
    }
    if($data==null){
      echo "用户名不存在";
    }
  //进行判断，数据对比
   $res = in_array($passward,$data);
  if ($res == true) {
    echo "登陆成功";
  }else {
    echo "密码错误";
  }
      }
   mysql_close($con); 
 ?>