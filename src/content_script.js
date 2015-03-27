
console.log("We're here!");
var $ = require('jquery');
var React = require('react');

var Notable = require('./components/Notable.jsx');
var Annotation = require('./components/Annotation.jsx');

React.render(<Notable text="this is for testing" />, $('.post-text')[0]);