
var porcentagem =0;


var interval;
interval=setInterval(timer, 400);
function timer(){
    $(".progress-bar")[0].setAttribute("style", "width:"+porcentagem+"%");
    console.log(porcentagem);
    porcentagem++;
    $(".progress-bar")[0].innerHTML= porcentagem+"%";
    if(porcentagem==100){
        clearInterval(interval);
    }

}
