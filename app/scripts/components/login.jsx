var React = require('react');

var User = require('../models/user').User;

/*
 * Provided needed headers for parse server
 */




var UserLoginComponent = React.createClass({
  handleSignIn: function(e){
    e.preventDefault();
    var email = $('.users').val();
    var password = $('.passage').val();
    var router = this.props.router;

    User.login(email, password, {
      success: function(user){
        console.log(user);
        router.navigate('recipe', {trigger: true});
      },
      error: function(user, error){
        console.log(user, error);
      }
    });
  },
  handleCreateAccount: function(e){
    e.preventDefault();
    var username = $('.create-user').val();
    var password = $('.access-granted').val();

    var newUser = new User();
    newUser.set({'username': username, 'password': password});

    console.log(newUser);

    newUser.save();

},
  render: function(){

    return (
  <div className="main-login container-fluid">
    <header className="main-header well well-sm">
      <span>Robust Flavor Calculations, LLC</span>
    <button type="submit" className="calculator btn btn-default navbar-btn"><a href='#recipes/'>My Recipes</a></button>
    </header>

    <div className="logmein row">
      <div className="login-complete col-md-6">
        <form onSubmit={this.handleSignIn} className="navbar-form">
          <div className="form-group">
            <h3>Access Your Account</h3>
          <span>Username:</span><input type="text" className="users form-control"placeholder="Username"></input>
          <br />
        <span>Password:</span><input type="text" className="passage form-control"placeholder="Password"></input>
            <button type="button" className="btn btn-default navbar-btn">Login</button>
        </div>


        </form>
      </div>
    </div>
    <div className="signmeup row">
      <div className="sign-up-complete col-md-6">
        <form onSubmit={this.handleCreateAccount} className="navbar-form">
          <div className="form-group">
            <h3>Create an Account</h3>
            <span>Create an Username:</span><input type="text" className="create-user form-control" placeholder="Username"></input>
          <br />
            <span>Create a password:</span><input type="text" className="access-granted form-control" placeholder="Password"></input>
            <button type="submit" className="btn btn-default">Sign Up</button>
      </div>
        </form>
      </div>
    </div>
  </div>
    )
  }
})

module.exports = {
  'UserLoginComponent': UserLoginComponent
}
