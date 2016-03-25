describe('shopping list items', function(){
  var list;

  beforeEach(function(){
    list = new ShoppingListItems();
  });

  it('should be a function', function(){
    expect(ShoppingListItems).to.be.a('function');
  });

  it('should have a property name', function(){
    // var list = new ShoppingListItems();
    list.should.have.property('name');
  });

  it('should have a property description', function(){
    list.should.have.property('description');
  });

  it('should have a property is_done', function(){
    list.should.have.property(is_done);
  });


});


