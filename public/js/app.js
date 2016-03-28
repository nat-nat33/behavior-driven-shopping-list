var listItems = new ShoppingListItem();
var myShoppingList = new ShoppingList();

var listGen = document.getElementById('list');
  list.addEventListener('click', function(event) {
  event.preventDefault();
});

var index = 0;
function add_to_shopping_list() {
  var title = document.getElementById('name').value;
  var description = ' ' + document.getElementById('description').value;
  var checkbox = document.getElementById('checkbox');
  var new_shopping_list_item = new ShoppingListItem(title, description);

  checkbox.addEventListener('click', changeCheckedStatus(index, checkbox));
  myShoppingList.addItem(new_shopping_list_item);

  var myList = myShoppingList.render();
  var contentDiv = document.getElementById('content');
  contentDiv.innerHTML = checkbox + ' ' + myList;
  return;
}

function changeCheckedStatus(index, checkbox) {
  var item = myShoppingList.items[index];
  console.log('myShoppingList.items',myShoppingList.items);
}
