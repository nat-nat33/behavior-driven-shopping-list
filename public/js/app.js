function add_to_shopping_list(){

  var name = document.getElementById('name').value;
  var description = ' ' +document.getElementById('description').value+ ' ';
  var newList = new ShoppingListItem(name, description);

  return newList;
}

function render(){
  var renderList = myShoppingList.render();
  console.log('renderList');
  document.getElementById('content').innerHTML = renderList;
}

document.getElementById('add_to_shopping_list').addEventListener('click', function(){
var newItem = add_to_shopping_list();
myShoppingList.addItem(newItem);
render();
});


var myShoppingList = new ShoppingList();