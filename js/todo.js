var lista = [null];
var aux;

function arrayRemove(arr, value) {

    return arr.filter(function(ele){
        console.log(ele + " "+value);
        return ele != value;
    });
 
 }

do{
aux=prompt("Todo list\n1.Add\n2.Remove\n3.Print\n99.Exit");

    if(aux=="1"){
       
       lista.push(prompt("Value to add: "));
       
    }else if(aux=="2"){
   
        lista=arrayRemove(lista, prompt("Value to remove: "));
    }else if(aux=="3"){
        if(lista==0){
            alert("Lista vazia!");
        }else{
            lista.forEach(function(corl){
                aux=aux+"\n"+corl;
                if(corl==null){
                    aux="Lista:";
                }
            })
            alert(aux);
        }
    }else if (aux=="99"){

    }else{
        alert("Invalid number!");
    }
}while(aux!="99");
