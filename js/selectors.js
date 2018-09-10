
var classe;
var classe2;
var classe3;
//$("div:first").css("background","red");

$("button").click(function(){
    $("li").css("background", "white");
    classe="."+$("input").val();
    classe2="#"+$("input").val();
    classe3=$("input").val();
    $(classe).css("background","purple");
    $(classe2).css("background","purple");
    $(classe3).css("background","purple");

});
