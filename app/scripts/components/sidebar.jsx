var React = require('react');

var SideBarComponent = React.createClass({
  render: function(){
    return(
      <div className="col-xs-3 side-navbar">
        <ul className="sidebar-links">
          <a href="#recipes/add"><li className="my-recipes">Add Recipes</li></a>
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
    )
  }
})
module.exports = {
'SideBarComponent': SideBarComponent
}
