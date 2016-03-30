var RemovedListItem = function(name, description){
    this.name = name;
    this.description = description;
    this.is_done = false;

};

RemovedListItem.prototype.check = function(){
  this.is_done = true;
  return this.is_done;
};

RemovedListItem.prototype.uncheck = function(){
  this.is_done = false;
  return this.is_done;
};

RemovedListItem.prototype.render = function(){
  var idx = myRemovedList.items.indexOf(this);
  checkboxElement = "<input class='checkbox" + idx + "' type='checkbox' onchange='checkedStatus(" + idx +", event.target)'>";
  buttonElement = "<button onclick='removeItemButton(" + idx + ")'>X</<button>";
  var string = "<li class='completed_" + this.is_done + "\'>" + checkboxElement + "<span>" + this.name + "</span><span>"+ this.description + "</span><span>" + buttonElement + "</span></li>";
  return string;
};


var RemovedList = function(){

  this.items = [];


  this.addItem = function(item){
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
      concatItems += this.items[i].render(i);
    }
    return '<ul>' + concatItems + '</ul>';
  };
};