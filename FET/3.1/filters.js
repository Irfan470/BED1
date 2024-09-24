// $("document").ready(function () {
//   $("#example p:first").css("color", "blue");
//   $("#example p:last").css("color", "red");
//   $("#example p:even").css("background-color", "yellow");
//   $("#example p:odd").css("background-color", "grey");
//   $("#example p.classA:even").css("border", "3px solid blue");
//   $("#example p.classB:first").css("border", "3px solid red");
//   $("#example p:gt(1)").css("font-size", "30px");
//   $("#example p:not(p:eq(2))").css("font-family", "Comic Sans MS");
// });
$("document").ready(function () {
  $("p[class]").css("color", "blue");
  $("p[id=para1]").css("background-color", "yellow");
  $("p[id^=para]").css("border", "3px solid red");
  $("p[id^=para][lang*=en-]").css("font-size", "30px");
});