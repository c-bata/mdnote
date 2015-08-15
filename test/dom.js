// It was in reference http://jaketrent.com/post/testing-react-with-jsdom/
import jsdom from 'jsdom';

global.document = jsdom.jsdom("<!doctype html><html><body></body></html>");
global.window   = document.parentWindow;

var doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
var win = doc.defaultView

global.document = doc
global.window = win

// take all properties of the window object and also attach it to the mocha global object
propagateToGlobal(win)

// from mocha-jsdom https://github.com/rstacruz/mocha-jsdom/blob/master/index.js#L80
function propagateToGlobal (window) {
  for (let key in window) {
    if (!window.hasOwnProperty(key)) continue
    if (key in global) continue

    global[key] = window[key]
  }
}