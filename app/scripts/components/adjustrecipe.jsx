var React = require('react');
var $ = require('jquery');

var Recipe = require('../models/recipes.js').Recipe;
var RecipeHeaderComponent = require('../components/header.jsx');
var RecipeForm = require('../components/recipeform.jsx');
var RecipeListComponent = require('../components/recipelist.jsx');
var SideBarComponent = require('../components/sidebar.jsx').SideBarComponent;

var AdjustRecipeComponent = React.createClass({
  getInitialState: function(){
    return {recipe: {}, ratio: 1}
  },
  adjustRecipe: function(newServingSize){
    console.log(newServingSize);
    var ratio = newServingSize / this.state.recipe.get('servings');
    this.setState({ratio: ratio});
  },
  // componentWillMount: function (){
  //   var newRecipe = new Recipe();
  //
  //   newRecipe.set({
  //     'image':  '../images/scone.jpeg',
  //     'title': 'Mixed Berry Scones',
  //     'description': 'Succulent warm scones',
  //     'servings': '5',
  //     'ingredients': [
  //       {'name': 'Butter', 'amount': '1', 'units': 'cups'},
  //       {'name': 'Flour', 'amount': '3', 'units': 'cups'},
  //       {'name': 'Sugar', 'amount': '0.5', 'units': 'cups'},
  //       {'name': 'Baking Powder', 'amount': '5', 'units': 'tsp'},
  //       {'name': 'Salt', 'amount': '1', 'units': 'tsp'},
  //       {'name': 'Egg', 'amount': '1', 'units': 'beaten'},
  //       {'name': 'Milk', 'amount': '1', 'units': 'cups'}
  //
  //     ]
  //   });
  //   newRecipe.save();
  //
  //   this.setState({recipe: newRecipe})
  // },
  render: function (){
    var recipe = this.state.recipe;

    return (
<div className="wrapper">
    <div className="row">
      <RecipeHeaderComponent />
    </div>
    <div className="row">
    <SideBarComponent />
      <div className="tasty row">



      </div>
  </div>
</div>
    )

  }
});


module.exports = {
  'AdjustRecipeComponent': AdjustRecipeComponent
}
