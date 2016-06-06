$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();

    var blanks = ["item1", "item2", "item3", "item4", "item5"];

    var newArray = [];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
       newArray.push(userInput.toUpperCase());
      //$("." + blank).text(userInput);
    });

    newArray = newArray.sort();
    newArray.forEach(function(item) {
      //build a list here
      $(".items").append("<li>" + item + "</li>");
      //concat item with <li></li>


    });
    // var arrays = blanks.map(function(blank) {
    //   return blank.toUpperCase();
    // });



    // var newArray = newArray.sort();

    $("#grcery-list").show();
    $("#blanks").hide();

  });
});
