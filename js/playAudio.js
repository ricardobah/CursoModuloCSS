var x = document.getElementById("myAudio"); 
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