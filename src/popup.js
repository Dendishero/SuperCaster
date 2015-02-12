document.getElementById('loadCustomMeida').addEventListener('click', handler);
document.getElementById('launchApp').addEventListener('click', chrome.extension.getBackgroundPage().launchApp);
document.getElementById('stopApp').addEventListener('click', chrome.extension.getBackgroundPage().stopApp);
document.getElementById('playMedia').addEventListener('click', chrome.extension.getBackgroundPage().playMedia);

function handler() {
	console.log(document.getElementById('customMediaURL').value);
	chrome.extension.getBackgroundPage().loadCustomMedia(document.getElementById('customMediaURL').value);
};

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
  });
function fuck() {
    var otherWindows = chrome.extension.getBackgroundPage();
	//console.log(otherWindows);
    console.log(otherWindows.backgroundFunction()); 
};
fuck();
 // http://gateway.play44.net/at/nw/detective_conan_-_761.mp4?st=_dkC2jmdIeLmXfTPZ10qEw&e=1423707795&server=byzoo