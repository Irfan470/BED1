// $(function () {
//   $("#showButton").click(function () {
//     $("p").show("slow");
//   });
//   $("#hideButton").click(function () {
//     $("p").hide("slow", "linear");
//   });
//   $("#toggleButton").click(function () {
//     $("p").toggle("fast", afterCompletion);
//   });
// });

// function afterCompletion() {
//   console.log("animation finished");
// }

// $(function () {
//   $("#fadeinButton").click(function () {
//     $("p").fadeIn("slow");
//   });
//   $("#fadeoutButton").click(function () {
//     $("p").fadeOut("slow", "linear");
//   });
//   $("#toggleButton").click(function () {
//     $("p").fadeToggle("fast", afterCompletion);
//   });
//   $("#fadetoButton").click(function () {
//     $("p").fadeTo("fast", 0.5);
//   });
// });

// function afterCompletion() {
//   console.log("animation finished");
// }

$(function () {
  $("#slidedownButton").click(function () {
    $("p").slideDown("slow");
  });
  $("#slideupButton").click(function () {
    $("p").slideUp("slow", "linear");
  });
  $("#toggleButton").click(function () {
    $("p").slideToggle("fast", afterCompletion);
  });
  
});

$(function () {
  $("#fadpar").hover(function(){
    $(this).fadeIn(1000, .1);
    $(this).fadeOut(1000);
  });
});


function afterCompletion() {
  console.log("animation finished");
}