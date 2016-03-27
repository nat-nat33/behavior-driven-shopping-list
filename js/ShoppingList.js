var ShoppingListItem = function(name, description){
    this.name = name;
    this.description = description;
    this.is_done = false;

};

ShoppingListItem.prototype.check = function(){
  this.is_done = true;
};

ShoppingListItem.prototype.uncheck = function(){
  this.is_done = false;
};

ShoppingListItem.prototype.render = function(){
  var string = "<li class='completed_" + this.is_done + "\'><span>" + this.name + "</span><span>"+ this.description + "</span></li>";
  return string;

};

var ShoppingList = function(){

  this.items = [];


  this.addItem = function(item){
    if (item instanceof ShoppingListItem === false) {
      throw new Error('Not a shopping list item.');
    }
    return this.items.push(item);
  };

  this.removeItem = function(item){
    if (!item && this.items.length > 0) {
      this.items.pop();
      return;
    }
    var index = this.items.indexOf(item);
    if (index === -1) {
      throw new Error('Not in the shopping list.');
    }
    else {
      this.items.splice(index, 1);
    }
  };

  this.render = function(){
    var concatItems = '';

    for (var i = 0; i < this.items.length; i++) {
      concatItems += this.items[i].render();
    }
    return '<ul>' + concatItems + '</ul>';
  };

};