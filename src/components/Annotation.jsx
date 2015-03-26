var React = require('react');

//component for annotations
var Annotation = React.createClass({

  render: function(){
    //render a custom div to the side of the tag.
    return (
      <div class='annotationPopUp' top={this.props.top} left={this.props.left}></div>
    )
  }

});

module.exports = Annotation;
