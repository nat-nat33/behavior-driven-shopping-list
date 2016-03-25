//validating parent class Shopping List Items
describe('shopping list items', function () {
  var items;

  beforeEach(function () {
    items = new ShoppingListItems();
  });

  it('should be a function', function () {
    expect(ShoppingListItems).to.be.a('function');
  });

  it('should have a property name', function () {
    // var items = new ShoppingListItems();
    items.should.have.property('name');
  });

  it('should have a property description', function () {
    items.should.have.property('description');
  });

  it('should have a property is_done', function () {
    items.should.have.property('is_done');
  });

  //validating check method
  describe('should have a method check', function(){
    it('should have a property check', function(){
      items.should.have.property('check');
    });

    it('should be a function', function () {
      expect(items.check).to.be.a('function');
    });

    it('should return shopping items items is_done', function () {
      items.check();
      expect(items.is_done).to.be.true;
    });

  });

  //validating uncheck method
  describe('should have a method uncheck', function () {
    it('should have a property uncheck', function(){
      items.should.have.property('uncheck');
    });

    it('should be a function', function () {
      expect(items.uncheck).to.be.a('function')
      ;
    });

    it('should return shopping items items is_done', function(){
      items.uncheck();
      expect(items.is_done).to.be.false;
    });

  });

  describe('should have a method render', function () {
    it('should have a property render', function () {
      items.should.have.property('render');
    });

    it('should be a function', function () {
      expect(items.render).to.be.a('function');
    });

    it('should return an html string', function () {
      expect(items.render).to.equal("<ul>" + "<li class=" + " \"completed_" + this.is_done + "\"" + ">" + "<span>" + this.name + "</span>" + "<span>" + this.description + "</span>" + "</li>" + "</ul>");
    });

  });

});

describe('shopping list', function () {
  var newList;

  beforeEach(function(){
    newList = new ShoppingList();
  });

  it('should be a function', function(){
    expect(newList).to.be.a.('function');
  });










});

