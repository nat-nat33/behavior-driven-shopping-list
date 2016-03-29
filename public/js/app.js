var myShoppingList = new ShoppingList();

function render(){
  var renderList = myShoppingList.render();
  document.getElementById('currentList').innerHTML = myShoppingList.items;
}

// function render(){
//   var listItems = myList.render();
//   document.getElementById('content').innerHTML = listItems;
//   clearInputs();
// }


document.getElementById('addItem').addEventListener('click', function(){
  var name = document.getElementById('name').value;
  var description = ' ' + document.getElementById('description').value;
  var newItem = new ShoppingListItem(name, description);
  var addNewItem = myShoppingList.addItem(newItem);
  render();
});










