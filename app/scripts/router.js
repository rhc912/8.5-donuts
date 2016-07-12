var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

// Local
var AdjustRecipeComponent = require('./components/adjustrecipe.jsx').AdjustRecipeComponent;
var UserLoginComponent = require('./components/login.jsx').UserLoginComponent;


var Router = Backbone.Router.extend({
  routes: {
    'recipe': 'index',
    '': 'login'
  },

  index: function(){
    ReactDOM.render(
      React.createElement(AdjustRecipeComponent),
      document.getElementById('container')
    );
  },
  login: function(){
    ReactDOM.render(
      React.createElement(UserLoginComponent, {router: this}),
      document.getElementById('container')
    );
  }
});

var router = new Router();

module.exports = {
  'router': router
}
