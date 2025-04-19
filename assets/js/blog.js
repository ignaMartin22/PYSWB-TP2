AOS.init({
  duration: 1200,
  once: true,
});
$(".filter-btn").click(function() {
  var filter = $(this).data("filter");
  $(".article").each(function() {
    var tags = $(this).data("tags").split(" ");
    if (tags.includes(filter) || filter === "all") {
      $(this).show();
    } else {
      $(this).hide();
    }
  });s
});

$(".reply-btn").click(function() {
  if ($(this).closest(".comment").find(".reply").length === 0) {
    $(this).closest(".comment").append('<div class="reply">¡Gracias por tu comentario!</div>');
  }
});