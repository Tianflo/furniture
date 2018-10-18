window.onload=function(){
    // var input1=document.getElementById('input1');
    // var spna1=document.getElementById('span1');
    var span1 = document.getElementsByTagName('span');
    var input1 = document.getElementsByTagName('input');
    var denglu = document.getElementById('denglu');
    var part5 = document.getElementById('part5');
    var div5 =document.getElementById('div5');
    var circle = document.getElementById('circle');
    var audio = document.getElementById('audio');
    // 让音乐控制台显示
    circle.onmouseenter=function(){
        audio.style.display='block';
    }
    circle.onclick=function(){
        audio.style.display='none';
    }
// 登录界面判断
    denglu.onclick=function(){
        first.style.display='block';
        part5.style.display='block';
        div5.style.display='block';
        // first.style.animation='move 2s ease forwards';
        first.style.animation='haha 2s ease forwards';
    }
    
    input1[0].onblur=function(){
        // alert('sasdf');
         if(this.value.length==0){
             span1[0].innerHTML='请输入账号';
             span1[0].style.color='white';
             
         }else{
              span1[0].innerHTML=' ';
         }
    }
    input1[1].onblur=function(){
        // alert('sasdf');
         if(this.value.length==0){
             span1[1].innerHTML='请输入密码';
             span1[1].style.color='white';
             
         }else{
              span1[1].innerHTML=' ';
         }
    }
    // 点击x让登录界面消失
    var px= document.getElementById('px');
    var first=document.getElementById('first');
        px.onclick=function(){
            first.style.display='none';
            part5.style.display='none';
            div5.style.display='none';
        }
// 点击x 让注册界面消失
    var pxx = this.document.getElementById('pxx');
        pxx.onclick=function(){
            second.style.display='none';
            part5.style.display='none';
            div5.style.display='none';
            
        }
    
// 注册界面是否输入
        input1[2].onblur=function(){
            if(this.value.length==0){
                span1[2].innerHTML='请输入账号';
                span1[2].style.color='white';
            }else{
                span1[2].innerHTML='❤';
                span1[2].style.color='skyblue';
            }
        }
// 点击注册跳转注册界面
        var zuce = document.getElementById('zuce');
        var second = document.getElementById('second');

            zuce.onclick=function(){

               second.style.display='block';
               first.style.display = 'none';

            }






// 判断密码长度
        input1[3].onblur=function(){
            if(this.value.length<6||this.value.length>12){
                span1[3].innerHTML='6~12位数';
                span1[3].style.color='white';
            }else{
                // span1[3].innerHTML='٩( ω )٩';
                span1[3].style.color='skyblue';
            }
        }
        //判断密码强度 
        var regStr=/[a-zA-Z]/;
		var regNum=/[0-9]/;
        var fStrNum=/\W/;
        var mima = document.getElementById('mima');

        input1[3].onkeyup=function(){
            if(this.value.length<6){
                
                mima.innerHTML='弱';
                mima.style.backgroundColor="rgb(247, 81, 81)";
               
            }if(this.value,length<=12){
                if((this.value.length>=6&&regStr.test(this.value))||(this.value.length>=6&&regNum.test(this.value))||(this.value.length>=6&&fStrNum.test(this.value))){
                    mima.innerHTML='中';
                    mima.style.backgroundColor="rgb(247, 225, 104)";
                }if((this.value.length>=6&&regStr.test(this.value)&&regNum.test(this.value))||(this.value.length>=6&&regStr.test(this.value)&&fStrNum.test(this.value))||(this.value.length>=6&&regNum.test(this.value)&&fStrNum.test(this.value))){
                    mima.innerHTML='强';
                    mima.style.backgroundColor='rgb(157, 255, 255)';
                }
                    
                
            }
        }
        // 判断密码强度结束
        
        //   var mima1=document.getElementById('mima1');
            input1[4].onblur=function(){
                // alert('SFD');
                if(input1[4].value==input1[3].value){
                    span1[4].innerHTML='密码一致';
                    span1[4].style.color='white';
                }else{
                    span1[4].innerHTML='密码不一致';
                    span1[4].style.color='white';
                }
            }

            input1[5].onblur=function(){
                if(this.value==input1[6].value){
                    span1[5].innerHTML='输入正确';
                    span1[5].style.color='white';
                }if(this.value==''){
                    span1[5].innerHTML='请输入验证码';
                }
                else{
                    span1[5].innerHTML='✈✈';
                    span1[5].style.color='white'
                }
            }
            input1[6].onclick=function(){
                  code();

            }
            function  code(){
                var  num = new Array(0,1,2,3,4,5,6,7,8,9,"Q","W","E","R","T","Y","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M");
                var numlength = 4;
                var arr = '';
                for(var i=0;i<numlength;i++){
                    var index = Math.floor(Math.random()*36);
                    arr+=num[index];
                }
                  input1[6].value=arr;
            }

            
// 重置注册信息
            var cz = document.getElementById('cz');
            var tj = document.getElementById('tj');

            cz.onclick = function(){
                input1[2].value='';
                input1[3].value='';
                input1[4].value='';
                input1[5].value='';
            }
    // 注册成功
            // tj.onclick=function(){
            //     window.location.href='http://www.baidu.com';
            // }

  //ajax数据交互
             var dengluOne = document.getElementById('dengluOne');
             var input2=document.getElementById("input2");
             var passward=document.getElementById("passward");


             dengluOne.onclick=function(){
                var xhr = new XMLHttpRequest();
                xhr.open("post","check.php");
                xhr.onreadystatechange = function(){
                    if(xhr.readyState==4&&xhr.status==200){
                       alert(xhr.responseText);
                    }
                }
                xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            
                xhr.send("username="+input2.value+"&passward="+passward.value);
            }
           

            tj.onclick=function(){
                var xhr = new XMLHttpRequest();
                xhr.open('POST','insert.php');
                xhr.onreadystatechange=function(){
                    if(xhr.readyState==4&&xhr.status==200){
                        alert(xhr.responseText);
                    }
                }
                xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                xhr.send("username="+input1[2].value+"&passward="+input1[3].value);
            }
            



}