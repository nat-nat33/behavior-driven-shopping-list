function add_to_shopping_list () {

  var name = document.getElementById('name').value;
  var description = ' ' +document.getElementById('description').value+ ' ';
  var newList = new ShoppingListItem(name, description);

  return newList;
}

//displays the current list of shopping items
function render () {
  var renderList = myShoppingList.render();
  console.log('renderList');
  document.getElementById('content').innerHTML = renderList;
}

function resetValues () {
  document.getElementById('name').value = ' ';
  document.getElementById('description').value = ' ';
}

document.getElementById('add_to_shopping_list').addEventListener('click', function () {
  var newItem = add_to_shopping_list();
  myShoppingList.addItem(newItem);
  render();
  resetValues();
});

function checkedStatus (index, checkbox) {
  var item = myShoppingList.items[index];
  if (checkbox.checked === true) {
    item.check();
  }
  else {
  item.uncheck();
  }
}

//removing item and adding it to removed item list
function removeItemButton (idx) {
  var item = myShoppingList.items[idx];
  myShoppingList.removeItem(item);
  render();
}


var myShoppingList = new ShoppingList();
var myRemovedList = new RemovedList();