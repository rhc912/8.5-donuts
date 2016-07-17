var Backbone = require('backbone');
var react = require('react');

var Ingredient = Backbone.Model.extend({

});

var IngredientCollection = Backbone.Collection.extend({
  model: Ingredient
});
var Recipe = Backbone.Model.extend({
  urlRoot: 'http://robbed-server.herokuapp.com/classes/Recipe'
});

var RecipeCollection = Backbone.Collection.extend({
  model: Recipe,
  url: 'http://robbed-server.herokuapp.com/classes/Recipe',
  parse: function(serverResponse){
    return serverResponse.results;
  }
})

module.exports = {
  'Ingredient': Ingredient,
  'IngredientCollection': IngredientCollection,
  'Recipe': Recipe,
  'RecipeCollection': RecipeCollection
}
