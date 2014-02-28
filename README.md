CamKit
======

****Access web cam and microphone using only html5 and javascript userGetMedia() function****

This object can embed webcam video and microphone audio on a page without a third-party plugin.

It takes a given page element and assign a video or audio source so it can display the user webcam video or microphone audio player in the specified page element.

The object can enable the capture of either video, audio or both.

The width and height of the player and the selector of the page element to embed the player are configurable parameters.

It works HTML5 browsers that implement getUserMedia like Webkit compatible browsers like Chrome and also Firefox.

***Exemple Usage***
```javascript
// CamKit
var cam = new CamKit();

cam.video = true;
cam.audio = false;

cam.width = 600;
cam.height = 400;

// Mandatory
cam.selector = '#videoplay'

cam.init()
```