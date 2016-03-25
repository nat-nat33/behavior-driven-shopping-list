//validating parent class Shopping List Items
describe('shopping list items', function () {
  var list;

  beforeEach(function () {
    list = new ShoppingListItems();
  });

  it('should be a function', function () {
    expect(ShoppingListItems).to.be.a('function');
  });

  it('should have a property name', function () {
    // var list = new ShoppingListItems();
    list.should.have.property('name');
  });

  it('should have a property description', function () {
    list.should.have.property('description');
  });

  it('should have a property is_done', function () {
    list.should.have.property('is_done');
  });

  //validating check method
  describe('should have a method check', function(){
    it('should have a property check', function(){
      list.should.have.property('check');
    });

    it('should be a function', function () {
      expect(list.check).to.be.a('function');
    });

    it('should return shopping list items is_done', function () {
      list.check();
      expect(list.is_done).to.be.true;
    });

  });

  //validating uncheck method
  describe('should have a method uncheck', function () {
    it('should have a property uncheck', function(){
      list.should.have.property('uncheck');
    });

    it('should be a function', function () {
      expect(list.uncheck).to.be.a('function')
      ;
    });

    it('should return shopping list items is_done', function(){
      list.uncheck();
      expect(list.is_done).to.be.false;
    });

  });

  describe('should have a method render', function () {
    it('should have a property render', function () {
      list.should.have.property('render');
    });

    it('should be a function', function () {
      expect(list.render).to.be.a('function');
    });

    it('should return an html string', function () {
      list.render();
      expect(list.render).to.equal("<ul>" + "<li class=" + " \"completed_" + this.is_done + "\"" + ">" + "<span>" + this.name + "</span>" + "<span>" + this.description + "</span>" + "</li>" + "</ul>");
    });

  });









});



