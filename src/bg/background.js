console.log('FROM THE BG');

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {file: "dist/content_script.js"});
});
