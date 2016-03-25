function ShoppingListItems(name, description){
  this.name = name;
  this.description= description;
  this.is_done= false;

  this.check = function () {
    this.is_done = true;
   };

  this.uncheck = function () {
    this.is_done= false;
  };

  this.render = function () {
    var output = "<ul>" +
    "<li class=" + " \"completed_" + this.is_done + "\"" + ">" +
    "<span>" + this.name + "</span>" +
    "<span>" + this.description + "</span>" +
    "</li>" +
    "</ul>";

    return output;
  };

}

function ShoppingList () {
  this.items = [];

  this.addItem = function (item) {
    if(item instanceof ShoppingListItems){
      throw new Error('not in shopping list items');
    }
    this.items.push(item);
  };

  this.removeItem = function (item) {

  };

}




