function action(){
    $("div p").replaceWith(replacement);
}
function replacement(){
    return '<a href="https://www.youtube.com">' + $(this).text()+'</a>';}