function loadScript(url, callback)
{
    //stolen from http://goo.gl/Iwt7mn
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}
var findurls = function findUrlsFunc()
{
	var v = textNode.nodeValue;
}

loadScript("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js", findurls);


