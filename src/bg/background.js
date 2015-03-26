console.log('FROM THE BG');

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.insertCSS(null, {file: "styles/style.css"});
  chrome.tabs.executeScript(null, {file: "dist/content_script.js"});
});
