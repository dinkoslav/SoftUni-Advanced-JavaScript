var scope = scope || {};

(function(scope){
    var DEFAULT_TIMEOUT = 3000;

    var Popup = (function() {
        function Popup(title, message, type, position, autoHide, closeButton, timeout, callback) {
            this._popupData = {
                "position": position,
                "type": type,
                "autoHide": autoHide,
                "timeout": timeout,
                "closeButton": closeButton,
                "title": title,
                "message": message,
                "callback": callback
            };
        }

        return Popup;
    })();

    var Success = (function(){
        function Success(title, message){
            Popup.call(this, title, message, 'success', 'bottomLeft',false, false);
        }

        return Success;
    })();

    var Info = (function(){
        function Info(title, message){
            Popup.call(this, title, message, 'info', 'topLeft',false, true);
        }

        return Info;
    })();

    var Error = (function(){
        function Error(title, message){
            Popup.call(this, title, message, 'error', 'topRight',true, false, DEFAULT_TIMEOUT);
        }

        return Error;
    })();

    var Warning = (function(){
        function Warning(title, message, callback){
            Popup.call(this, title, message, 'warning', 'bottomRight',false, false, 0, callback);
        }

        return Warning;
    })();

    scope._models = {
        Success: Success,
        Info: Info,
        Error: Error,
        Warning: Warning

    }

})(scope);