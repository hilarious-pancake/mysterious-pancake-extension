var $ = require('jquery');
var React = require('react');
var Firebase = require('firebase');

var ToolBar = React.createClass({

  showLogin: function() {
    $('#mgnl-log-in-display').toggle();
  },

  render: function() {
    return (
      <div className="mgnl-toolbar mgnl-reset">
        <button className="mgnl-reset" onClick={this.showLogin}>Login</button>
      </div>
    );
  }

});

module.exports = ToolBar;
