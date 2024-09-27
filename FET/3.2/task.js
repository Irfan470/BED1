function action1(){
    $("div p").replaceWith(replacement);
}
function replacement(){
    return '<a href="https://www.youtube.com">' + $(this).text()+'</a>';}

    function action2(){
        $("a").hover(hoverIn, hoverOut);

    }
    function hoverIn(){
        $(this).css("color", "red");
    }
    function hoverOut(){
        $(this).css("color", "black");
    }
    function action3(){
        $("p").fadeOut(1000);
        $("button").slideUp(1000);
    }