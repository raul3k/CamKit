CamKit = function()
{
    this.selector = '';

    this.video = true;
    this.audio = true;

    this.width = 0;
    this.height = 0;

    this.init = function() {

		// Errors messages
        var errorsMsgs = {
            NOT_SUPPORTED:  "Your browser does not support getUserMedia() method, please update it.",
            SELECTOR_EMPTY: "Query selector is empty. Use CamKit.selector to select a DOM element."
        };

        // Normalise window.URL
        window.URL || (window.URL = window.webkitURL || window.msURL || window.oURL);

        // Normalise navigator.getUserMedia to navigator.getMedia function
        navigator.getMedia = ( navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia);

        // If the navigator supports the method getUserMedia
        if(!navigator.getMedia){
           console.log(errorsMsgs.NOT_SUPPORTED)
           return false;
        }

        // Attribute missing
        if(this.selector == '') {
            console.log(errorsMsgs.SELECTOR_EMPTY)
            return false;
        }

        var selector = this.selector;
        var width = this.width;
        var heigth = this.height;

        var attr = {video: this.video, audio: this.audio}


        navigator.getMedia(attr, function(stream){
            video = document.querySelector(selector);
            video.src = (window.URL && window.URL.createObjectURL) ? window.URL.createObjectURL(stream) : stream;
            video.width = width;
            video.height = heigth;
        }, function(errorCode){
            console.log(errorsMsgs.NOT_SUPPORTED + "\n" + e);
        });

        return true;
    }

}