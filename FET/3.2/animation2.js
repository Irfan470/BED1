$(function () {
  $("#anim1").click(function () {
    $("p").animate(
      {
        padding: 0,
        marginTop: 16,
        marginBottom: 16,
        marginLeft: 0,
        marginRight: 0,
        fontSize: 16,
      },
      "slow"
    );
  });
  $("#anim2").click(function () {
    $("p").animate(
      {
        padding: 10,
        margin: 10,
      },
      "fast",
      afterCompletion
    );
  });
  $("#anim3").click(function () {
    $("p").animate(
      {
        fontSize: "30px",
      },
      "fast"
    );
  });
});

function afterCompletion() {
  console.log("animation finished");
}
