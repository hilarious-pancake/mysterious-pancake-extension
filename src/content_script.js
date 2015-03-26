
console.log("We're here!");
var $ = require('jquery');
var React = require('react');

var Notable = require('./components/Notable.jsx');
var Annotation = require('./components/Annotation.jsx');

React.render(<Notable />, $('.post-text')[0]);