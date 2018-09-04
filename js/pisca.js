var body = document.querySelector("body");
var jumbotron= document.querySelector(".jumbotron");
var jumbotron2 = document.querySelector("#jumbotron2");
setInterval( function(){

    if(body.style.backgroundColor=="rgb(135, 135, 135)"){
        jumbotron.style.backgroundColor="rgb(135, 135, 135)";
        body.style.backgroundColor="rgb(235, 235, 235)";
        jumbotron2.style.backgroundColor="rgb(135, 135, 135)";
    }else{
        
        body.style.backgroundColor="rgb(135, 135, 135)";
        jumbotron.style.backgroundColor="rgb(235, 235, 235)";
        jumbotron2.style.backgroundColor="rgb(235, 235, 235)";
    }
}
,1000);
