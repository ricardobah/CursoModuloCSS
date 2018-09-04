var x = document.getElementById("myAudio"); 
x.volume -=0.1;
var isPlay=false;
function playAudio(){
if(!isPlay){
    x.play();
    
    isPlay=true;
}else{
    x.pause();
    isPlay=false;
}
}