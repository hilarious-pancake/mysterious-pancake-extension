var $ = require('jquery');
var React = require('react');
var Firebase = require('firebase');

var ToolBar = React.createClass({

  showLogin: function() {
    $('.mgnl-user-popup').toggle();
  },

  render: function() {
    return (
      <div className="mgnl-toolbar mgnl-reset">
        <button onClick={this.showLogin}>Login</button>
      </div>
    );
  }

});

module.exports = ToolBar;
