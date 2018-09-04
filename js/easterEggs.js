var headers = document.querySelectorAll("li");
headers.forEach(
    function(a){
        a.addEventListener("click",function(){
           
            if(a.style.backgroundColor!="rgb(255, 0, 0)"){
                 
                a.style.backgroundColor="rgb(ff, 00, 00)";   
                a.setAttribute("style","background-color:#ff0000;");
            }else{
               
                a.setAttribute("style","background-color:#00ff00;");
            }
        });        

    }
);