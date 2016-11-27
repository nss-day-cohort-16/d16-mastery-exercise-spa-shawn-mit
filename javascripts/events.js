"use strict";

var CarLot = (function(eventCarLot) {

    // Augmenting function //

    eventCarLot.activateEvents = function() {
        //scope local variables to  Augment IIFE

        var inputField = document.getElementById("inputfield");
        var cards = document.getElementsByClassName("productCards");



        // LOOP // loop to apply event functions to cards as pulling from JSON file or an API.
        for (var c = 0; c < cards.length; c++) {
            // cycle through cards applying an eventlistener as they're clicked.

            cards[c].addEventListener("click", function() {

                // remove border of cards
                eventCarLot.removeBorder(this);

                // add border of cards
                eventCarLot.addBorder(this, '#FFA500');
                // bind input listener for value
                eventCarLot.bind(this);
                //clear user input
                eventCarLot.clearInput();
            });

        }
            // clearInput to clear text in input field from user values
            eventCarLot.clearInput = function() {
                inputField.value;
            };

            eventCarLot.bind = function(element) {
                inputField.addEventListener("keyup", function() {

                    // once card is clicked replace description of card - isClicked replaces value
                    if (element.classList.contains("isClicked")) {
                        element.querySelector(".desc").innerHTML = inputField.value;
                    }
                })
            };




    }

    return eventCarLot;

})(CarLot || {});