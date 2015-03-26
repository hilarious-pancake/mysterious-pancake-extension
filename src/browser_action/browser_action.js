Firebase.enableLogging(true);
var f = new Firebase('https://chrome-sample.firebaseio-demo.com/');

f.transaction(function(curr) {
  if (isNaN(parseFloat(curr)))
    return 1; // initialize to 1.
  else
    return curr + 1; // increment.
}, function() {
    // Once the transaction has completed, update the UI (and watch for updates).
    f.on('value', function(s) {
      console.log(s.val())
      document.getElementById('contents').innerHTML = s.val();
    });
  });

console.log('FROM THE ACTION');

// chrome.browserAction.onClicked.addListener(function(tab) {
//   // console.log('changing page color to red');
//   // chrome.tabs.executeScript({
//   //   code: 'document.body.style.backgroundColor="red"'
//   // });
//   chrome.tabs.executeScript(null, {file: "content_script.js"});
// });
