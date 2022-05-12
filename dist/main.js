const renderer = new Renderer();

$("button").on("click", function () {
  const input = $("#input").val();
  $.ajax({
    method: "GET",
    url: `recipes/${input}`,
    success: (data) => {
      renderer.render(data);
    },
    error: (xhr, text, error) => {
      console.log(text);
    },
  });
});


$(".food-container").on("click", "#image",function () {
  
  const liAlert = $(this).closest(".container").find("li:first").text()
 alert(liAlert)

});