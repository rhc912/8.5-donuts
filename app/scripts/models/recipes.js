var Backbone = require('backbone');
var react = require('react');

var Recipe = Backbone.Model.extend({
  url: 'http://tiny-parse-server.herokuapp.com/'
});


module.exports = {
  'Recipe': Recipe
}
