window.addEventListener("load", function(){

  var area_code = document.getElementById('first');
  var middle_numbers = document.getElementById('second');
  var end_numbers = document.getElementById('third');

  phone_number=[area_code, middle_numbers, end_numbers]

  area_code.addEventListener("keyup", function() {
    typed_characters = area_code.value.length;
    max_characters = parseInt(area_code.getAttribute("maxlength"));

    if (typed_characters === max_characters) {
      middle_numbers.focus();
    }
  });

  middle_numbers.addEventListener("keyup", function() {
    typed_characters = middle_numbers.value.length;
    max_characters = parseInt(middle_numbers.getAttribute("maxlength"));

    if (typed_characters === max_characters) {
      end_numbers.focus();
    }

   //  for (var i = 0; i < phone_number.length; i++){

 		// i.addEventListener("keyup", function() {
   //  		typed_characters = i.value.length;
   //  		max_characters = parseInt(i.getAttribute("maxlength"));

   //  		if (typed_characters === max_characters) {
   //    		i++.focus();
   //    		}
   //    	}	
  });

});

