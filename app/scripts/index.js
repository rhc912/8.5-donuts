var $ = window.jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var router = require('./router.js');

$.ajaxSetup({
  beforeSend: function(xhr){
    xhr.setRequestHeader("X-Parse-Application-Id", "rob");
    xhr.setRequestHeader("X-Parse-REST-API-Key", "newkey");
    // xhr.setRequestHeader("X-Parse-Session-Token", "r:749d473272a63d4070b6ec9b93dc706b");
  }
});

$(function(){
  console.log('start app');
  Backbone.history.start();
});
