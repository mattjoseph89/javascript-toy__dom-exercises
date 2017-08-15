window.addEventListener("load", function(){

	// 1. Get the DOM element which will be clicked.
	 var toggle = document.getElementById("button");

 	// 2. Add a listener for the 'click' event onto that element.
	 toggle.addEventListener("click", function(){

   	 	// 3. The block for the listener should get the DOM
    	//    element containing the text to show/hide.
    	var toggle_change = document.getElementsByClassName("toggle_me");

    	// 4. Modify that DOM element's style to change it's 'display'
    	//    back and forth between hidden and shown.
    	

    	for (var i = 0; i < toggle_change.length; i++) {
      if (toggle_change[i].style.display === "none") {
        toggle_change[i].style.display = "block";
      }
      else {
        toggle_change[i].style.display = "none";
      }
    }

	});

});
