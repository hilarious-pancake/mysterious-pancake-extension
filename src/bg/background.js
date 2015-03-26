// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	chrome.pageAction.show(sender.tab.id);
    sendResponse();
  });

// $('p').on('click', function(){
//   alert('hello');
// });

// $('.hpms-notable').on('click', function(){
//   //create a popout
// })

console.log('FROM THE BG');

var Hello = React.createClass({displayName: 'Hello',
  render: function() {
    console.log('HEY FROM REACT!');
    return React.createElement("div", null, "Hello ", this.props.name);
  }
});

React.render(
  React.createElement(Hello, {name: "World"}),
  document.getElementById('container') //it seems that it doesn't work beacuse the script is run before the div
);
