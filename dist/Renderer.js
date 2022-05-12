class Renderer {
  constructor(data) {
    this.data = data;
  }

  render(data) {
    const recipe = data;

    $(".food-container").empty();
    const food = $("#food-template").html();
    const foodTemplate = Handlebars.compile(food);
    let foodNewHTML = foodTemplate({ recipe });
    $(".food-container").append(foodNewHTML);
  }
}
