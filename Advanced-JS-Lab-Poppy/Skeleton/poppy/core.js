var scope = scope || {};
(function(scope) {
    var DEFAULT_CLOSE_TIMEOUT = 150;
    var FADEOUT_SPEED = 0.03;

    function pop(type, title, message, callback) {
        var popup;
        switch (type) {
            case 'success':
                popup = new scope._models.Success(title, message);
                break;
            case 'info':
                popup = new scope._models.Info(title, message);
                break;
            case 'error':
                popup = new scope._models.Error(title, message);
                break;
            case 'warning':
                popup = new scope._models.Warning(title, message, callback);
                break;
            default:
                break;
        }

        // generate view from view factory
        var view = scope._viewFactory.createPopupView(popup);

        processPopup(view, popup);
    }

    function processPopup(domView, popup) {
        if(popup._popupData.closeButton){
            domView.getElementsByClassName('poppy-close-button')[0]
                .addEventListener('click', function(){
                    fadeOut(domView, DEFAULT_CLOSE_TIMEOUT);
                })
        }
        
        if(popup._popupData.autoHide){
            fadeOut(domView, popup._popupData.timeout);
        }

        if(popup._popupData.callback){
            domView.addEventListener('click', function(){
                popup._popupData.callback();
            });
        }


        fadeIn(domView);
        document.body.appendChild(domView);
    }

    function fadeOut(element, timeout) {
        element.style.opacity = 1;

        var fadeElement = setInterval(function fade() {
            var val = parseFloat(element.style.opacity);
            if (!((val -= FADEOUT_SPEED) < 0)) {
                element.style.opacity = val;
                requestAnimationFrame(fade);
            }
        }, timeout);
    }

    scope.pop = pop;
})(scope);
