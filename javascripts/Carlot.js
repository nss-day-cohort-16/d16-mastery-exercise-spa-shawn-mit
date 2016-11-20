"use strict";



var CarLot = (function () {
  
  var inventory = [];

  return {
    loadInventory: function (populatePage) {
      var inventoryLoader = new XMLHttpRequest();
      		inventoryLoader.open("GET", "inventory.json");          
      		inventoryLoader.send();
                //console.log("check",inventory);

          //grab JSON data and set data variable to parse object
          inventoryLoader.addEventListener("load", function () {
      		var data = JSON.parse(event.target.responseText).cars;
       		
      });
          populatePage(inventory);
    },

    getInventory: function () {
      return inventory;
    }

  };

})(CarLot || {});

//console.log("check", CarLot);