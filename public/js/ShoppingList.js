var ShoppingListItem = function(name, description){
    this.name = name;
    this.description = description;
    this.is_done = false;

};

ShoppingListItem.prototype.check = function(){
  this.is_done = true;
  return this.is_done;
};

ShoppingListItem.prototype.uncheck = function(){
  this.is_done = false;
  return this.is_done;
};

ShoppingListItem.prototype.render = function(){
  var idx = myShoppingList.items.indexOf(this);
  checkboxElement = "<input id='checkbox" + idx + "' type='checkbox' onchange='changeCheckedStatus(" + idx +", event.target)'>";
  buttonElement = "<button onclick='removeItemButtonClicked(" + idx + ")'>X</<button>";
  var string = "<li class='completed_" + this.is_done + "\'>" + checkboxElement + "<span>" + this.name + "</span><span>"+ this.description + "</span><span>" + buttonElement + "</span></li>";
  return string;
};


var ShoppingList = function(){

  this.items = [];


  this.addItem = function(item){
    if (item instanceof ShoppingListItem === false) {
      throw new Error('Not item in Shopping List');
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
      throw new Error('Not item in Shopping List.');
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