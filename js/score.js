var score = document.querySelectorAll("#score");
var btn1 = document.querySelector("#t1");
var btn2 = document.querySelector("#t2");
var btnReset = document.querySelector("#res");


btn1.addEventListener("click",
function(){
    checkVencedor(score,0)
        
    
}
);

btn2.addEventListener("click",
function(){
    checkVencedor(score,1);
        
    
}
);

btnReset.addEventListener("click",
function(){
    score[0].textContent = 0;
    score[1].textContent = 0;
    score[0].setAttribute("color", "black");
    score[1].setAttribute("color", "black");
}
);

function checkVencedor(pontos,jog){
    if(score[1].textContent!="5" && score[0].textContent!="5"){
        score[jog].textContent= Number(score[jog].textContent)+1;
    }
if(pontos[0].textContent=="5"){
    score[0].setAttribute("color", "green");
    score[1].setAttribute("color", "red");
    return false;
}else if(pontos[1].textContent=="5"){
    score[0].setAttribute("color", "red");
    score[1].setAttribute("color", "green");
    return false;
}
return true;
}
