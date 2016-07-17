var React = require('react');
var Recipe = require('../models/recipes.js').Recipe;
var IngredientCollection = require('../models/recipes.js').IngredientCollection;
var SideBarComponent = require('../components/sidebar.jsx').SideBarComponent;
var RecipeHeaderComponent = require('../components/header.jsx');


var DescriptionComponent = React.createClass({
  render: function(){
    return(
    <div>
      <form className="description">
        <input type="text" placeholder="Title" className="title-input form-control"></input>
      </form>
        <div>

        </div>
    </div>
    )
  }
});
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
});
var IngredientForm = React.createClass({

  handleAmount: function(e){

    this.props.ingredient.set('amount', e.target.value);
  },
  handleUnits: function(e){

    this.props.ingredient.set('units', e.target.value);
  },
  handleName: function(e){

    this.props.ingredient.set('name', e.target.value);
  },
  render: function(){
    var ingredient = this.props.ingredient;

    var count = this.props.counter + 1;
    return (
      <div className="ingredients row">
        <h1 className="ingr-heading">Ingredients</h1>
       <div className="col-offset-6">
           <input onChange={this.handleAmount} ref={"amount"}  type="text"  className="amount form-control" id="amount" placeholder="Amount"/>
           <input onChange={this.handleUnits} placeholder="Units" className="unit form-control"></input>
           <input onChange={this.handleName} ref={"name"} type="text" className="ingr-place form-control" id="name" placeholder="Ingredient"/>
     </div>
     </div>

          // <div className="recipe-form">
          //   <form className="holding" onSubmit={this.handleNewRecipe}>
          //     <span className="make">Makes</span>
          //     <input type="text" className="servings" onChange={this.handleNameChange} ></input>
          //     <span className="how-many">Servings</span>
          //     <button className="btn btn-primary">Adjust Recipe</button>
          //   </form>
          // </div>

    )
  }
})
var RecipeFormComponent = React.createClass({
  getInitialState: function(){
    var ingredients = new IngredientCollection();
    ingredients.add([{}]);

    return{
      ingredients: ingredients,
      recipe: new Recipe()
    };
  },
  componentWillMount: function(){
    var self = this;
    var recipe = this.state.recipe;

    recipe.on('change', this.update);
    this.state.ingredients.on('add', this.update);
  },
  update: function(){
    this.forceUpdate();
  },
  handleSubmit: function(e){
    e.preventDefault();
    var router = this.props.router;

    var recipe = this.state.recipe;
    var ingredients = this.state.ingredients;

    recipe.set('ingredients', ingredients.toJSON());
    console.log(recipe);

    recipe.save().done(function(e){
      router.navigate('recipes/add', {trigger: true});
    });
  },
  handleTitleChange: function(e){
    this.state.recipe.set('title', e.target.value);
  },
  handleDescChange: function(){
    this.state.recipe.set('description', e.target.value);
  },
  handleDelete: function(){

  },
  addIngredient: function(){
    this.state.ingredients.add([{}]);
  },
  render: function(){

  var ingredientFormSet = this.state.ingredients.map(function(ingredient,index){
    return <IngredientForm key={ingredient.cid} ingredient={ingredient} counter={index}/>
  });

  return(

    <div>
      <div className="wrapper row">
        <RecipeHeaderComponent />
        <div className="row">
          <SideBarComponent />


        <div className="tasty row">
          <div className="col-xs-6">
            <DescriptionComponent />
          <form  onSubmit={this.handleSubmit}>
            {ingredientFormSet}
            <button onClick={this.handleDelete} id="submit-ingredient" type="button" className="btn btn-danger">X</button>

          </form>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
});
module.exports = RecipeFormComponent;
