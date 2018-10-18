var sorrow_top=document.getElementsByClassName('sorrow_top')[0];
var currentPosition, timer;
var count=0;
var footer_icon=document.getElementsByClassName('footer_icon')[0];
// sorrow_top.style.display='none';
window.onscroll = function(){ //绑定scroll事件
    currentPosition = document.documentElement.scrollTop;
    currentPosition2 = document.documentElement.scrollBottom;
    var header = document.getElementsByTagName( "header" )[0]; //查询并定义div元素
    var sorrow_top=document.getElementsByClassName('sorrow_top')[0];
    if( currentPosition >= 300 ) { //判断
    header.style.animation="show1 2s linear forwards";
    sorrow_top.style.animation="show1 2s linear forwards";

    } 
    else{
        header.style.animation="show2 2s linear forwards";
        sorrow_top.style.animation="show2 2s linear forwards";
    }     
}

function scale_1(){
    for(var i=0;i<footer_icon.getElementsByTagName('a').length;i++){
    footer_icon.getElementsByTagName('a')[i].style.animation="scale 1s linear infinite";
    }
}
setInterval("scale_1()",100);

//点击置顶
function GoTop() {
    
    currentPosition = document.documentElement.scrollTop;
    
    currentPosition -= 1;
    if (currentPosition > 0 && count==0) {
        window.scrollTo(0, currentPosition);
        timer = setInterval("GoTop()", 10);
        
    } 
    else {
        count=1;
       currentPosition = 0;
        window.clearInterval(timer);
    }
     
}
sorrow_top.onclick=function(){
    GoTop();
    count=0;

}


