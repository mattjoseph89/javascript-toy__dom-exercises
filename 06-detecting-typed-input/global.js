window.addEventListener("load", function(){

  var name_field = document.getElementById("full_name");

  name_field.addEventListener("keyup", function() {

  	// optional add on that only produces response when enter key(13) is released
  	if(event.which == 13)

    var greeting_div = document.getElementById("greeting");

    greeting_div.innerHTML = ("Hello there, " + name_field.value + "!");

  });

});