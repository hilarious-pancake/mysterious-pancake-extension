
var $ = require('jquery');
var React = require('react');

var Notable = require('./components/Notable.jsx');
var Annotation = require('./components/Annotation.jsx');
var ToolBar = require('./components/ToolBar.jsx');
var LoginPopup = require('./components/LoginPopup.jsx');
var Firebase = require('firebase');

// Render toolbar component to page
$(document.body).append('<div id="mgnl-toolbar-container"></div>');
React.render(<ToolBar />, $('#mgnl-toolbar-container')[0]);

// Login div
$(document.body).append('<div id="mgnl-log-in-display" class="mgnl-hidden"></div>');
React.render(<LoginPopup />, document.getElementById('mgnl-log-in-display'));

/********************************************
  
  Sentence tokenizer

********************************************/

var nodeIterator = document.createNodeIterator(
  // Use body node as root
  document.getElementsByTagName('body')[0],

  // Only consider nodes that are element nodes
  NodeFilter.SHOW_ELEMENT,

  // Object containing the function to use for the acceptNode method
  // of the NodeFilter
    { acceptNode: function(node) {
      // Only accept nodes that have content other than whitespace
      // and do not have tags named body, script, or jason.
      // Our script dynamically creates jason elements from existing text.
      // (If we did not reject these elements, the NodeIterator
      // would add them to the list of nodes to traverse,
      // and as a result, we would have an infinite loop.)
      if (!/^\s*$/.test(node.data) && /\S/.test(node.innerText) &&
        (node.tagName === 'P' || node.tagName === 'DIV' ||
          node.tagName === 'H1' || node.tagName === 'H2' ||
          node.tagName === 'H3' || node.tagName === 'H4' ||
          node.tagName === 'H5' || node.tagName === 'H6') &&
        node.className !== 'jason' && node.className !== 'conor' &&
        node.className !== 'mgnl-success' && node.className !== 'mgnl-failure' &&
        node.firstChild.nodeType === 3 && /\S/.test(node.firstChild.textContent)) {
        return NodeFilter.FILTER_ACCEPT;
      } else {
        return NodeFilter.FILTER_REJECT;
      }
    }
  },
  false
);

// Regular expression for filtering sentences
// - ending punctuation (period, question mark, or exclamation point)
// - and space or quote or fancy end quote
// - followed by
//   quote
//   or fancy start quote
//   or capital letter plus lowercase letter
//   or letter I or letter A followed by space
//   or space
var regex = /[\.?!][\s|"|”](?="|“|[A-Z][a-z]|[I|A]\s|\s)/g;

// Initialize node to the first node in our NodeIterator
var startNode = nodeIterator.nextNode();

// Call wrap nodes on startNode
wrapNodes(startNode);

// Function for wrapping nodes in jason tags
function wrapNodes(node) {
  // Keep running this script as long as we have nodes
  while (node !== null) {
    // Split nodes at sentence breaks
    var sentences = node.innerText.split(regex);

    // If we have at least one sentence
    if (sentences.length) {
      // Initialize cutoff point to zero
      // and counter for child nodes to zero
      var cutoff = 0;
      var childNodeCount = 0;

      for (var sentCount = 0; sentCount < sentences.length; sentCount++) {
        // save current child node
        var currentChildNode = node.childNodes[childNodeCount];

        if (currentChildNode !== undefined && currentChildNode.nodeType === 3) {
          // set cutoff point to length of current sentence
          cutoff = sentences[sentCount].length + 2;

          if (cutoff <= currentChildNode.textContent.length) {
            // split current child node at cutoff point
            currentChildNode.splitText(cutoff);
          }

          // create span
          var newSpan = document.createElement('span');

          // replace child node with new span
          node.replaceChild(newSpan, currentChildNode);

          React.render(<Notable text={currentChildNode.textContent} />, newSpan);
        }

        // increment child count
        childNodeCount++;
      }

    }

    node = nodeIterator.nextNode();
  }
  
}