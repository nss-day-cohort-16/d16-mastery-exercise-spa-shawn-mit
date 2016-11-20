"use strict";



function populatePage(inventory) {
    var container = document.getElementById("container");
    var carsDiv = '';

    // Loop over the inventory and populate the page
    for (var i = 0; i < inventory.length; i++) {

        var getCars = inventory[i];
        //wireframe actual card onto DOM 
        // first if statement to begin every 3 columns break into new row.
        if (i % 3 === 0) {
            //literal notation w/ticks
           carsDiv += `<div class = "row">`;
        }


        carsDiv +=
            `<div class = "col-md-3 productCard">

				<h3> ${getCars.make} </h3>
				<h3> ${getCars.model} </h3>
				<h3> ${getCars.year} </h3>
				<h3 class = "description"> ${getCars.description} </h3>
				<h3> ${getCars.price} </h3>

			</div>`;

        // second if statement for the END of a row. Close the row from line 20.

        if ((i + 1) % 3 === 0) {

            carsDiv += `</div>`;
        }

    } //end of for loop iteration over product cards 

    //now plaster the product cards into the DOM
    	container.innerHTML += carsDiv;

    // Now that the DOM is loaded, establish all the event listeners needed

    //CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);