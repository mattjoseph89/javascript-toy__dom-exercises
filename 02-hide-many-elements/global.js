window.addEventListener("load", function(){

	// 1. Get the DOM element which will be clicked.
	 var hide = document.getElementById("button");

 	// 2. Add a listener for the 'click' event onto that element.
	 hide.addEventListener("click", function(){

   	 	// 3. The block for the listener should get the DOM
    	//    element containing the text to hide.
    	var less_text = document.getElementsByClassName("hide_me");

    	// 4. Modify that DOM element's style to change it's 'display'
    	//    from a shown value to a hidden value.
    	for (var i = 0; i < less_text.length; i++) {
      		less_text[i].style.display = "none";
    	}

	});

});

