CamKit = function()
{
    this.selector = '';

    this.video = true;
    this.audio = true;

    this.width = 0;
    this.height = 0;

    this.init = function() {
        var error = function(){
            console.log('Your browser does not support getUserMedia function. Please update it.');
        }

        // If the navigator supports the method
        //alert(!navigator.webkitGetUserMedia);
        if(!((navigator.getUserMedia) || (navigator.webkitGetUserMedia) || (navigator.mozGetUserMedia))){
            error();
            return false;
        }


        // Attribute missing
        if(this.selector == '') {
            console.log('Query selector is empty. Use CamKit.selector to select a DOM element.')
            return false;
        }

        var selector = this.selector;
        var width = this.width;
        var heigth = this.height;

        var attr = {video: this.video, audio: this.audio}

        if(navigator.getUserMedia){
            navigator.getUserMedia(attr, function(midia_local) {
                video = document.querySelector(this.selector);
                video.src = window.webkitURL.createObjectURL(midia_local);
                video.width = width;
                video.height = height;
            }, error());
        } else if(navigator.webkitGetUserMedia) {
            navigator.webkitGetUserMedia(attr, function(midia_local) {
                video = document.querySelector(selector);
                video.src = window.webkitURL.createObjectURL(midia_local);
                video.width = width;
                video.height = height;
            }, error());
        } else if(navigator.mozGetUserMedia) {
            navigator.mozGetUserMedia(attr, function(midia_local) {
                video = document.querySelector(this.selector);
                video.src = window.webkitURL.createObjectURL(midia_local);
                video.width = width;
                video.height = height;
            }, error());
        }

        return true;
    }

}