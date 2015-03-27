var React = require('react');
var firebase = require('firebaseRootRef');


//component for annotations
var Annotation = React.createClass({

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
      "background-color": "red",
      "width": "400px",
      "height": "200px",
      "border-radius": "10px",
      "opacity": "0.5"
      // top: this.props.top,
      // left: this.props.left
    };

    //render a custom div to the side of the tag.
    return (
      <div className="conor" style={style}>
        <ul class="mrgn-list">
        </ul>
        <input ref="input"/>
        <button onClick="this.addAnnotation"></button>
      </div>
    )
  }

});

module.exports = Annotation;
