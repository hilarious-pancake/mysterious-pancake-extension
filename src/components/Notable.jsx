var $ = require('jquery');
var React = require('react');
var Annotation = require('./Annotation.jsx')

//component for notable objects
var Notable = React.createClass({

  componentDidMount: function() {
    $(React.findDOMNode(this.refs.conor)).css({
      top: this.position().top,
      left: this.position().left + 10
    });
  },

  position: function(){
    var offset = $(React.findDOMNode(this.refs.jason)).offset()
    var width = $(React.findDOMNode(this.refs.jason)).width();

    return {
      top: offset.top,
      left: offset.left + width
    }
  },

  annotationPopUp: function(e){
    if (!React.findDOMNode(this.refs.conor).contains(e.target)) {
      $(React.findDOMNode(this.refs.conor)).fadeToggle();
    }
  },

  toggleHighlight: function(e) {
    $(React.findDOMNode(this.refs.jason)).toggleClass('mgnl-highlight');
  },

  render: function(){

    return (
      <span className="jason" ref="jason" onClick={this.annotationPopUp} onMouseEnter={this.toggleHighlight} onMouseLeave={this.toggleHighlight}>
        {this.props.text}
        <Annotation ref="conor" parentText={this.props.text}>
        </Annotation>
      </span>

    );
  }

});

module.exports = Notable;
