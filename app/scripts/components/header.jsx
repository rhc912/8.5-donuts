var React = require('react');
var RecipeForm = require('../components/recipeform.jsx');


var RecipeHeaderComponent = React.createClass({
  render: function(){
    return(
      <header className="robust-flavor">
        <div className="col-md-3 llc">Robust Flavor Calculations, LLC<a className="login" href="#">Login</a>

        </div>
            <button type="button"  className="btn btn-default navbar-btn"><a href="#recipes/add"><i className="fa fa-plus" aria-hidden="true"></i></a></button>
        <div className="col-md-1">

        </div>
      </header>
    )
  }
})

module.exports = RecipeHeaderComponent
