var React = require('react');
var $ = require('jquery');

var Recipe = require('../models/recipes.js').Recipe;


var RecipeForm = React.createClass({
  handleNameChange: function(e){
    e.preventDefault();
    this.setState({servings: e.target.value})
  },
  handleNewRecipe: function(e){
    e.preventDefault();
    this.props.adjustRecipe(this.state.servings);
  },
  render: function(){

    return (

          <div className="recipe-form">
            <form className="holding" onSubmit={this.handleNewRecipe}>
              <span className="make">Makes</span>
              <input type="text" className="servings" onChange={this.handleNameChange} placeholder=""></input>
              <span className="how-many">Servings</span>
              <button className="btn btn-primary">Adjust Recipe</button>
            </form>
          </div>

    )
  }
})

var RecipeListComponent = React.createClass({
    render: function(){
      var ratio = this.props.ratio;
      console.log(ratio);
      var ingredients = this.props.recipe.get('ingredients');

      var ingredientList = ingredients.map(function(ingredient, index){
        return (
          <li className="recipe-list" key={index}>{ingredient.title} {ingredient.name} {ingredient.amount * ratio} {ingredient.units}</li>
        )
      });
      return (
      <ul className="list-ingr">
        {ingredientList}
      </ul>
    )
    }
})


var AdjustRecipeComponent = React.createClass({
  getInitialState: function(){
    return {recipe: {}, ratio: 1}
  },
  adjustRecipe: function(newServingSize){
    console.log(newServingSize);
    var ratio = newServingSize / this.state.recipe.get('servings');
    this.setState({ratio: ratio});
  },
  componentWillMount: function (){
    var newRecipe = new Recipe();

    newRecipe.set({
      'title': 'Mixed Berry Scones',
      'description': 'Succulent warm scones',
      'servings': '5',
      'ingredients': [
        {'name': 'Butter', 'amount': '1', 'units': 'cups'},
        {'name': 'Flour', 'amount': '3', 'units': 'cups'},
        {'name': 'Sugar', 'amount': '0.5', 'units': 'cups'},
        {'name': 'Baking Powder', 'amount': '5', 'units': 'tsp'},
        {'name': 'Salt', 'amount': '1', 'units': 'tsp'},
        {'name': 'Egg', 'amount': '1', 'units': 'beaten'},
        {'name': 'Milk', 'amount': '1', 'units': 'cups'}

      ]
    });

    this.setState({recipe: newRecipe})
  },
  render: function (){
    var recipe = this.state.recipe;

    return (
<div className="wrapper">
    <div className="row">
      <header className="robust-flavor">
        <div className="col-md-3 llc">Robust Flavor Calculations, LLC</div>
        <div className="col-md-1">
          <a href="#">Login</a>
        </div>
      </header>
    </div>
    <div className="row">
      <div className="col-xs-1 side-navbar">
        <ul className="sidebar-links">
          <a href="#"><li className="my-recipes">My Recipes</li></a>
          <hr className="line" />
          <a href="#"><li className="public-recipes">Public Recipes</li></a>
          <hr className="line" />
          <a href="#"><li className="popular-recipes">Popular Recipes</li></a>
          <hr className="line" />
          <a href="#"><li className="my-favorite-recipes">My Favorite Recipes</li></a>
          <hr className="line" />
          <a href="#"><li className="my-pantry">My Pantry</li></a>
        </ul>
      </div>
      <div className="tasty row">
        <div className="col-xs-6">
        <RecipeForm adjustRecipe={this.adjustRecipe} recipe={this.state.recipe} />
        </div>
        <div className="col-xs-6">
       <RecipeListComponent ratio={this.state.ratio} recipe={this.state.recipe} />
       </div>
      </div>
  </div>
</div>
    )

  }
});


module.exports = {
  'AdjustRecipeComponent': AdjustRecipeComponent,
  'RecipeForm': RecipeForm

}
