var React = require('react');
var Annotation = require('./Annotation.jsx')

//component for notable objects
  //selectable custom tag and unique IDs
var Notable = React.createClass({

  positioning: function(){
    var offset = $('customClickedDiv').offset()
    var width = $('customClickedDiv').width();
    // var height = $('customClickedDiv').height();

    return {
      top: offset.top,
      left: offset.left + width
    }
  },

  annotationPopUp: function(){
    //render annotation component
      //render annotation component to the body using jsx
        //you need to pass along the positioning as a prop so that you have access to it in the annotation comp
  },

  render: function(){
    return (
      <eventableTag onClick={this.annotationPopUp}>{this.props.innerHTML}</eventableTag>
    )
  }

});

module.exports = Notable;
