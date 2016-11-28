"use strict";



var CarLot = (function (borderCarLot) {

	borderCarLot.addBorder = function (element, color) {

		element.classList.add("isClicked");

		element.style.background = color;
		//bring cursor back into 'focus' of input field after card click
		document.getElementById("inputfield").focus();

	};

	// LOOP function // to remove previous isClicked functions
	borderCarLot.removeBorder = function (reset) {



		for (var b = 0; b < reset.length; b ++ ){

			var listing = reset[b];

			listing.classlist.remove("isClicked");

			listing.style.background = '';
		}
	};

return borderCarLot

})(CarLot || {});