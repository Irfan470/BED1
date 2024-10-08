
// $(function() {
//     $("#onButton").on("click", function() {
//         $("#para1").on("mouseenter mouseleave", highlight)
//     });
//     $("#offButton").on("click", function() {
//         $("#para1").off("mouseenter mouseleave", highlight)
//     });

// });
// function highlight() {
//    console.log("Event triggered")
//    $(this).toggleClass("highlighted");
// }


// $(function () {
//   $("#onButton").click(function () {
//     $("#para1").hover(highlight, highlight);
//   });
//   $("#offButton").click(function () {
//     $("#para1").off("mouseenter mouseleave", highlight);
//   });
// });
// function highlight() {
//   console.log("Event triggered");
//   $(this).toggleClass("highlighted");
// }

$(function () {
  $("#onButton").click(function (event) {
    updateEventDetails(event);
    $("#para1").hover(highlight, highlight);
  });
  $("#offButton").click(function (event) {
    updateEventDetails(event);
    $("#para1").off("mouseenter mouseleave", highlight);
  });
});
function highlight(event) {
  updateEventDetails(event);
  $(this).toggleClass("highlighted");
}

function updateEventDetails(evt) {
  $("li span[id]").text("");
  $("#evtType").text(evt.type);
  $("#evtWhich").text(evt.which);
  $("#evtTarget").text(evt.target.id);
  if (evt.relatedTarget) {
    $("#evtRelated").text(
      evt.relatedTarget.tagName + "#" + evt.relatedTarget.id
    );
  }
  $("#evtPageX").text(evt.pageX);
  $("#evtPageY").text(evt.pageY);
  $("#evtClientX").text(evt.clientX);
  $("#evtClientY").text(evt.clientY);
  $("#evtMetaKey").text(evt.metaKey);
  if (evt.data) {
    $("#evtData").text(evt.data.name);
  }
}
$(function () {
    $("#onButton").click(function () {
      $("p").css("font-weight", "bold");
    });
    $("#offButton").click(function () {
      $("p").removeAttr("style");
    });
    });