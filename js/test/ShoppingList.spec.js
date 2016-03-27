describe('ShoppingListItem', function() {
  var SL = null;
  beforeEach(function() {
    SL = new ShoppingListItem();
  });

  it ('should be a function', function() {
    expect(ShoppingListItem).to.be.a('function');
  });

  // PROPERTIES
    // NAME
      it('should have a name property', function() {
        expect(SL).to.have.property('name');
      });

    // DESCRIPTION
      it('should have a description property', function() {
        expect(SL).to.have.property('description');
      });

    // IS DONE
      it('should have an is_done property', function() {
        expect(SL).to.have.property('is_done');
      });

  // METHODS

  describe('ShoppingListItem Methods', function(){

    it('should accept a name argument', function() {
      var SL2 = new ShoppingListItem('Totally', 'Duh');
      expect(SL2.name).to.equal('Totally');
    });

    it('should accept a description argument', function() {
      var SL2 = new ShoppingListItem('Totally', 'Duh');
      expect(SL2.description).to.equal('Duh');
    });

    describe('Check Method', function() {

      it('should have a check method', function(){
        expect(SL.check).to.exist;
      });

      it('should be a function', function(){
        expect(SL.check).to.be.a('function');
      });

      it('should set is_done to true', function(){
        expect(SL.check()).to.be.true;
      });

    }); //Ends Check Method

    describe('Uncheck Method', function() {


      it('should have an uncheck method', function() {
        expect(SL.uncheck).to.exist;
      });

      it('should be a function', function() {
        expect(SL.uncheck).to.be.a('function');
      });

      it('should change is_done to false', function() {
        expect(SL.uncheck()).to.be.false;
      });


    }); //Ends Uncheck Method

    describe('Render Method', function() {


      it('should have a render method', function() {
        expect(SL.render).to.exist;
      });

      it('should be a function', function() {
        expect(SL.render).to.be.a('function');
      });

      it('should return a string', function(){
        expect(SL.render()).to.be.a('string');
      });

      var SL3 = new ShoppingListItem('Grapes', 'are happy little things');
      SL3.uncheck();
      it('should return an html formatted string with populated values', function(){
        expect(SL3.render()).to.equal("<li class='completed_false'><span>Grapes</span><span>are happy little things</span></li>");
      });


    }); //Ends Uncheck Method

  }); //Ends ShoppingListItem Methods




}); //Ends ShoppingListItem Suite

describe('Shopping List', function(){

  var SL = null;

  beforeEach(function() {
    SL = new ShoppingList();
  });


  it('should be a function', function(){
    expect(ShoppingList).to.be.a('function');
  });

  it('should have an items property', function(){
    expect(SL).to.have.property('items');
  });

  it('items should be an array', function(){
    expect(SL.items).to.be.an('array');
  });

  describe('Methods', function(){

    describe('Add Item', function(){

      it('should exist', function(){
        expect(SL.addItem).to.exist;
      });

      it('addItem should be a function', function(){
        expect(SL.addItem).to.be.a('function');
      });

      it('addItem add shopping list items to items array', function(){
        var SL1 = new ShoppingList();
        var grapes = new ShoppingListItem('grapes', 'are cute!')
        SL1.addItem(grapes);
        expect(SL1.items).to.include(grapes);
      });

      it('addItem should only add shopping list items', function(){
        var SL2 = new ShoppingList();
        expect(SL2.addItem.bind(SL2, 'not an item')).to.throw(Error);
      });

    }); //Ends Add Item Method

    describe('Remove Item', function(){

      it('removeItem should exist', function(){
        expect(SL.removeItem).to.exist;
      });

      it('should remove an item from the items array', function(){
        var SL3 = new ShoppingList();
        var carrots = new ShoppingListItem('carrots', 'are delicious!');
        SL3.addItem(carrots);
        expect(SL3.items).to.include(carrots);
        SL3.removeItem(carrots);
        expect(SL3.items).to.not.include(carrots);
      });

      it('should remove the last item from the items array', function(){
        var SL4 = new ShoppingList();
        var banana = new ShoppingListItem('banana', 'is yellow.');
        var cereal = new ShoppingListItem('cereal', 'is not always for breakfast.');
        SL4.addItem(banana);
        SL4.addItem(cereal);
        SL4.removeItem();
        expect(SL4.items).to.not.include(cereal);
      });

    }); //Ends Remove Item Method

    describe('Render Method', function(){

      it('should exist', function(){
        expect(SL.render).to.exist;
      });

      it('should return a string', function(){
        expect(SL.render()).to.be.a('string');
      });

      it('should return an HTML formatted string', function(){
      var granola = new ShoppingListItem('granola', 'for hippies, and everyone else');
      SL.addItem(granola);
      expect(SL.render(granola.render())).to.equal("<ul><li class=\'completed_false\'><span>granola</span><span>for hippies, and everyone else</span></li></ul>");
      });

    }); //Ends Render Method

  }); //Ends Methods
});