window.addEventListener("load", function(){

	// 1. Get the DOM element which will be clicked.
	 var show = document.getElementById("button");

 	// 2. Add a listener for the 'click' event onto that element.
	 show.addEventListener("click", function(){

   	 	// 3. The block for the listener should get the DOM
    	//    element containing the text to show.
    	var more_text = document.getElementsByClassName("show_me");

    	// 4. Modify that DOM element's style to change it's 'display'
    	//    from a hidden value to a shown value.
    	for (var i = 0; i < more_text.length; i++) {
      		more_text[i].style.display = "block";
    	}

	});

});
