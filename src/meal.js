function nameMenuItem(food) {
  return `Delicious ${food}`
}

function createMenuItem(name, price, type) {
  var menuItem = {
    name: name,
    price: price,
    type: type,
  };
  return menuItem;
};

function addIngredients(ingredient, ingredients) {
  if (!ingredients.includes(ingredient)) {
    ingredients.push(ingredient);
  }
  return ingredients;
};

function formatPrice(price) {
   return `$${price}`;
}

function decreasePrice(price) {
  return (price * .90);
}

function createRecipe(title, ingredients, type) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: type,
  }
  return recipe;
}



module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


