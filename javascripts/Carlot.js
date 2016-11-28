"use strict";



var CarLot = (function () {
  
  var inventoryJSON = [];

  return {

    loadInventory: function (populatePage) {
      var inventoryLoader = new XMLHttpRequest();
      		inventoryLoader.open("GET", 'javascripts/inventory.json');          
      		inventoryLoader.send();
               // console.log("check", inventory);

          //grab JSON data and set data variable to parse object
          inventoryLoader.addEventListener("load", function()  {
      		//fill inventory array with parsed JSON objects
          inventoryJSON = JSON.parse(event.target.responseText).cars;
           populatePage(inventoryJSON);

      });


    },

      getInventory: function () {
      return inventoryJSON;
    }
    

  };

})(CarLot || {});

//console.log("check", CarLot);