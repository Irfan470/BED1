$(function () {
  showValues();
  $("#example").click(changeValues);
});

function changeValues() {
  $("#example").height(440);
  $("#example").width(470);
  showValues();
}

function showValues() {
  $("#height").html($("#example").height());
  $("#width").html($("#example").width());
  $("#innerH").html($("#example").innerHeight());
  $("#innerW").html($("#example").innerWidth());
  $("#outerH").html($("#example").outerHeight());
  $("#outerW").html($("#example").outerWidth());
  $("#offset").html(
    $("#example").offset().top + ", " + $("#example").offset().left
  );
  $("#position").html(
    $("#example").position().top + ", " + $("#example").position().left
  );
}
$("a").attr("title", "http://www.jquery.com");
$("a").attr("target", "_blank");
