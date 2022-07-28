class Renderer {
  renderRecpie = (data) => {
    const source = $("#recipe-container").html();
    const template = Handlebars.compile(source);
    const somehtml = template({ recipe: data });
    $("#recipe-main-container").append(somehtml);
  };
}
