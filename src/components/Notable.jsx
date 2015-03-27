var $ = require('jquery');
var React = require('react');
var Annotation = require('./Annotation.jsx')
var Firebase = require('firebase');
var ReactFireMixin = require('reactfire');
var sha1 = require('sha1');

//component for notable objects
var Notable = React.createClass({

  mixins: [ReactFireMixin],

  getInitialState: function() {
    return {
      notes: []
    };
  },

  componentWillMount: function() {
    // hash the url to get a unique storage id for the webpage
    var docHash = sha1(window.location.href);
    // use the text as hashed ID for firebase
    var hash = sha1(this.props.text);
    this.bindAsArray(new Firebase(
      "https://popping-torch-5999.firebaseio.com/docs/"+docHash+"/notables/"+hash+"/notes"),
      "notes");
  },

  componentDidMount: function() {
    $(React.findDOMNode(this.refs.conor)).css({
      top: this.position().top,
      left: this.position().left
    });
  },

  position: function(){
    var offset = $(React.findDOMNode(this.refs.jason)).position()
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

  highlightOn: function(e) {
    $(React.findDOMNode(this.refs.jason)).addClass('mgnl-highlight');
  },

  highlightOff: function(e) {
    $(React.findDOMNode(this.refs.jason)).removeClass('mgnl-highlight');
  },

  render: function(){

    var hasNotes = this.state.notes.length > 0;
    var classString = (hasNotes) ? "jason mgnl-underline" : "jason";

    return (
      <span className={classString} ref="jason" onClick={this.annotationPopUp} onMouseEnter={this.highlightOn} onMouseLeave={this.highlightOff}>
        {this.props.text}
        <Annotation ref="conor" parentText={this.props.text}>
        </Annotation>
      </span>

    );
  }

});

module.exports = Notable;