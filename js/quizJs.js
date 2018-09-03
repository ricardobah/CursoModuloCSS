console.log("veio olhar oq aq?");
alert("Hello world from quiz JavaScript!");
var nome = prompt("what is your name?");
var count=0;
var aux;
aux = prompt("1-Beer 2-Vodka");

if(aux==2){
    count++;
}
aux = prompt("1-Velhas Virgens x 2-Matanza");
if(aux==1){
    count++;
}
aux = prompt("1-Gym x 2-Street workout");
if(aux==2){
    count++;
}
aux = prompt("1-Bars x 2-Clubs");
if(aux==1){
    count++;
}

aux = prompt("1-C# x 2-Java");
if(aux==1){
    count++;
}

alert("Corrects: "+count+"/5");