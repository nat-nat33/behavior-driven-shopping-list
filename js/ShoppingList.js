function ShoppingListItems(name, description){
  this.name = name;
  this.description= description;
  this.is_done= false;

  this.check = function () {
    is_done = true;
   };

  this.uncheck = function () {
    is_done= false;
  };
}

