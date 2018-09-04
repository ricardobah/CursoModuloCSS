var headers = document.querySelectorAll("li");
headers.forEach(
    function(a){
        a.addEventListener("click",function(){
            if(a.style.bckground!="rgb(ff, 00, 00)"){
                a.style.background="rgb(ff, 00, 00)";   
            }else{
                a.style.backgroud="rgb(00, 00, ff)"
            }
        });        

    }
);