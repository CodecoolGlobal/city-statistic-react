var $world = $("#world"),
  $continents = $world.children("g").not("#outline"),
  $div = $("div");

$continents.each(function () {
  var $el = $(this);
  $(this).hover(
    function () {
      $div.text($el.data("name")).css("marginLeft", -($div.width() / 2));
      $el.children().css("fill", colour());
    },
    function () {
      $div.empty();
      $el.children().css("fill", "#BCBEC0");
    }
  );
});

// http://stackoverflow.com/a/1484514
function colour() {
  var e = "0123456789ABCDEF".split(""),
    t = "#";
  for (var n = 0; n < 6; n++) {
    t += e[Math.floor(Math.random() * 16)];
  }
  return t;
}
