console.log('FROM THE BG');

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.insertCSS(null, {file: "styles/style.css"});
  chrome.tabs.executeScript(null, {file: "dist/content_script.js"});
});

// var ref = new Firebase("https://popping-torch-5999.firebaseio.com");
// ref.onAuth(function(authData) {
//   if (authData !== null) {
//     console.log("Authenticated successfully with payload:", authData);
//     // only inject scripts if authenticated
//   } else {
//     // Try to authenticate with Google via OAuth redirection
//     console.log("Authenicating...");
//     ref.authWithOAuthPopup("google", function(error, authDataInner) {
//       if (error) {
//         console.log("Login Failed!", error);
//       } else {
//         console.log("Authenticated successfully with payload:", authDataInner); 
//       }
//     });
//   }
// })
