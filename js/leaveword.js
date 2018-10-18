

//点击小图片，显示表情
$(".bg").click(function(e){
    $(".face").slideDown();//慢慢向下展开
    e.stopPropagation();   //阻止冒泡事件
});

//在桌面任意地方点击，他是关闭
$(document).click(function(){
    $(".face").slideUp();//慢慢向上收
});

//点击小图标时，添加功能
$(".face ul li").click(function(){
    var simg=$(this).find("img").clone();
    $(".message").append(simg);
});

//点击发表按扭，发表内容
count=0;
$(".bt1").click(function(){
    var txt=$(".message").html();

    if(txt==""){
        $('.message').focus();//自动获取焦点
        return;
    }
    var text01=document.getElementsByClassName("message")[0];
    text01.innerHTML="";
    $(".msgCon").prepend("<div class='msgBox'><dl><dt><img src='img/兔子.jpg' width='50' height='50'/></dt><dd>神马都是浮云</dd></dl><div class='msgTxt'>"+txt+"</div><div class='delete'>删</div></div>");
    count++;
    text();
});
// 删除
var msgCon=document.getElementsByClassName('msgCon')[0];
var msgBox=document.getElementsByClassName('msgBox');
var delete1=document.getElementsByClassName('delete');
function text(){
    for(var j=0;j<msgBox.length;j++){
        (function(j){delete1[j].onclick=function(){
            msgBox[j].style.display="none";
            // msgBox[j].parentNode.removeChild(msgBox[j]);
            // console.log(masgBox[j].length);
        }})(j);   
    }
}