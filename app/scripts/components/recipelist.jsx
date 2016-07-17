var React = require('react');
var RecipeCollection = require('../models/recipes.js').RecipeCollection;
var RecipeHeaderComponent = require('../components/header.jsx');
var SideBarComponent = require('../components/sidebar.jsx').SideBarComponent;


var IngredientTextComponent = React.createClass({
  render: function(){
    return(
      <div>
        <textarea placeholder="Describe your Recipe"></textarea>
      </div>
    )
  }
})

var RecipeListComponent = React.createClass({
    getInitialState: function(){
      return {
        recipeCollection: []
      };
  },
    componentWillMount: function(){

      var self = this;
      var recipeCollection = new RecipeCollection();
      recipeCollection.fetch().done(function(){
        self.setState({recipeCollection: recipeCollection});
      });
    },
    render: function(){
      var recipes = this.state.recipeCollection;
      console.log(recipes);

      var recipeList = recipes.map(function(recipe, index){
        return (
          <li className="recipe-list" key={index}>
          {recipe.get('title')}
        <img  src={recipe.get('image')} />
          </li>
        )
      });
      return (


        <div className="wrapper">
          <div>
            <RecipeHeaderComponent />
          </div>
            <div className="row">
              <SideBarComponent />
              <div className="lister col-xs-3">
                <ul>
                  {recipeList}
                </ul>
              </div>
            </div>

        </div>
    )
    }
});

module.exports = RecipeListComponent
