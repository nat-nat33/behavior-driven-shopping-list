//validating parent class Shopping List Items
describe('Shopping List Items', function () {
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
  describe('check', function (){
    it('should have a property check', function (){
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
  describe('uncheck', function () {
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

  describe('render', function () {
    it('should have a property render', function () {
      items.should.have.property('render');
    });

    it('should be a function', function () {
      expect(items.render).to.be.a('function');
    });

    it('should return an html string', function () {
      expect(items.render()).to.equal("<ul>" + "<li class=" + " \"completed_" + this.is_done + "\"" + ">" + "<span>" + this.name + "</span>" + "<span>" + this.description + "</span>" + "</li>" + "</ul>");
    });

  });

});

describe('Shopping List', function () {
  var list;

  beforeEach(function () {
  list = new ShoppingList();
  });

  it('should be a function', function () {
    expect(ShoppingList).to.be.a('function');
  });

  it('should have a property items', function () {
    list.should.have.property('items');
  });

  describe('addItem', function () {
    it('should be a function', function () {
      expect(list.addItem).to.be.a('function');
    });

    it('should throw new error', function () {
      expect(list.addItem('not an item')).to.throw(Error);
    });

    it('should have an array', function () {
      expect(list.items.length).to.equal(1);
    });

  });

  describe('removeItem', function () {
    it('should be a function', function () {
      expect(list.removeItem).to.be.a('function');
    });
  });

});
