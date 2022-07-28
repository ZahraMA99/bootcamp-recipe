render = new Renderer();

$("#search").on("click", function () {
  $("#recipe-main-container").empty();
  let ingredient = $(".input").val();
  $.get(`/sanity/${ingredient}`, function (data) {
    render.renderRecpie(data);
  });
});

$("#recipe-main-container").on("click", ".image", function () {
  alert('');
});
