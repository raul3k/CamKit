// Normalise window.URL
window.URL || (window.URL = window.webkitURL || window.msURL || window.oURL);

// Normalise navigator.getUserMedia
navigator.getUserMedia || (navigator.getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
//
// toString for the older implementation (found by https://github.com/agektmr)
var options = {video: true, toString: function(){ return "video"; }};
navigator.getUserMedia(options, successCallback, errorCallback);

// using the normalised window.URL
function successCallback(stream) {
    video = document.querySelector("#videoplay");
    video.src = (window.URL && window.URL.createObjectURL) ? window.URL.createObjectURL(stream) : stream;
}

function drawFrame() {
    var canvas = document.querySelector('canvas'),
        context = canvas.getContext('2d');

    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    setTimeout(drawFrame, 50);
}

ccv.detect_objects({canvas : (ccv.pre(canvas)), cascade: cascade, interval: 2, min_neighbors: 1});

// highlight
context.fillRect(face.x, face.y, face.width, face.height);

// mask
context.drawImage(mask, face.x, face.y, face.width, face.height);