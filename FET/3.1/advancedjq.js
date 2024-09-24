$("document").ready(function () {
  $("div > p").css("color", "blue");
  $("div p.classA").css("border", "3px solid red");
  $("p + div").css("background-color", "yellow");
  $("#para3 ~ p").css("font-size", "20px");
});
