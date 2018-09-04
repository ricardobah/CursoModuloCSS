var list = document.querySelectorAll("img");


    list.forEach(function(a){
        a.addEventListener("click",function(){
            a.setAttribute("src","null");
        });
    }
    );
