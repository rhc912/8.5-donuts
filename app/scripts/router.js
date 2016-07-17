var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

// Local
var AdjustRecipeComponent = require('./components/adjustrecipe.jsx').AdjustRecipeComponent;
var UserLoginComponent = require('./components/login.jsx').UserLoginComponent;
var RecipeAddComponent = require('./components/addrecipe.jsx').RecipeAddComponent;
var RecipeListComponent = require('./components/recipelist.jsx');
var RecipeFormComponent = require('./components/recipeform.jsx');

var Router = Backbone.Router.extend({
  routes: {
    '': 'login',
    'login': 'login',
    'recipes/add': 'recipeForm',
    'recipes/:id': 'recipeDetail',
    'recipes/': 'recipeList'
  },

  recipeDetail: function(id){
    ReactDOM.render(
      React.createElement(AdjustRecipeComponent, {id: id}),
      document.getElementById('container')
    );
  },
  login: function(){
    ReactDOM.render(
      React.createElement(UserLoginComponent, {router: this}),
      document.getElementById('container')
    );
  },
  recipeList: function(){
    ReactDOM.render(
      React.createElement(RecipeListComponent, {router: this}),
      document.getElementById('container')
    );
  },
  recipeForm: function(){
    console.log('recipeCalculator');
    ReactDOM.render(
      React.createElement(RecipeFormComponent, {router: this}),
      document.getElementById('container')

    );
  }
});

var router = new Router();

module.exports = {
  'router': router
}
