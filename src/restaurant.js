function createRestaurant(name) {
  var pizzaRestaurant = {
    name: name,
    
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    }
  };
return pizzaRestaurant;
};

function addMenuItem(restaurant, item) {
  if (!restaurant.menus[item.type].includes(item))
  restaurant.menus[item.type].push(item);
};
//NEED bracket notation to make function dynamic and access 'type' of variable.

function removeMenuItem(restaurant, item, type) {
  var menu = restaurant.menus[type];
  for (var i = 0; i < menu.length; i++) {
    if (menu[i].name === item) {
      menu.splice(i, 1);
      return `No one is eating our ${item} - it has been removed from the ${type} menu!`;
    }
  }
  return `Sorry, we don't sell ${item}, try adding a new recipe!`;
}

function checkForFood(restaurant, requestedItem) {
  var menu = restaurant.menus[requestedItem.type];
  for (var i = 0; i < menu.length; i++) {
    if (menu[i].name === requestedItem.name) {
      return "Yes, we're serving " + requestedItem.name + " today!";
    }
  }
  return "Sorry, we aren't serving " + requestedItem.name + " today.";
}
//This one was a BITCH! 






module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  checkForFood
}