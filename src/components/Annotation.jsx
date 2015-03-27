var React = require('react');
var Firebase = require('firebase');
var ReactFireMixin = require('reactfire');

//component for annotations
var Annotation = React.createClass({

  mixins: [ReactFireMixin],

  componentWillMount: function() {
    this.bindAsArray(new Firebase("https://popping-torch-5999.firebaseio.com/???/notes"), "notes");
  },

  componentDidMount: function() {
    // set firebase sync/change listener
  },

  addAnnotation: function() {
    var text = $(React.findDOMNode(this.refs.input)).val();
    // TODO: sync to firebase
  },

  render: function(){
    var style = {
      position: "absolute",
      "background-color": "#cccccc",
      "width": "400px",
      "height": "200px",
      "border-radius": "5px",
      "opacity": "0.5",
      padding: "5px" 
      // top: this.props.top,
      // left: this.props.left
    };

    //render a custom div to the side of the tag.
    return (
      <div className="conor" style={style}>
        <ul className="mrgn-list">
        </ul>
        <input ref="input"/>
        <button onClick="this.addAnnotation">Comment</button>
      </div>
    )
  }

});

module.exports = Annotation;
