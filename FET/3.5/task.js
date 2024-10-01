// $("document").ready(function() {
//     $(".classA").css("color", "red");
//     $("p").css("font-size", "20px");
//     $("#para4").css("padding-left", "20px");
// });
$(document).ready(function() {
    $("[class]").css("background-color", "green");
    $("div p").css("font-size", "20px");
    $("p[lang]:even").css("padding-left", "10px");
    $("p:even[lang]").css("padding-top", "10px");
    
});