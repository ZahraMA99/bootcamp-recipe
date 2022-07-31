
renderer = new Renderer();

$("#search").on("click", function () {
    $("#recipe-main-container").empty();
    let ingredient = $("#input").val();
    $.get(`/recipes/${ingredient}`, function (data) {
        renderer.renderRecpie(data);
    });
  });
  
  $("#recipes-container").on("click", ".image", function () {
    alert($(this).siblings('ul').children('li').first().text());
});