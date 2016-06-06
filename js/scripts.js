$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();

    var blanks = ["item1", "item2", "item3", "item4", "item5"];
    var newArray = [];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
       newArray.push(userInput.toUpperCase());
    });

    var newArray = newArray.sort();

    newArray.forEach(function(item) {
      $(".items").append("<li>" + item + "</li>");
    });

    $("#grcery-list").show();
    $("#blanks").hide();

  });
});
