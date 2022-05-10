//$("body").css("background-color","blue");


var time = new Date();

document.write(time.getHours());

time = time.getHours();

if(time == '18')
{
   
    //$("html").css("background-image","back2.jpg");
    $("body").css("background-image",'url(css/back2.jpg)');
}