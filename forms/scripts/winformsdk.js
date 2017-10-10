var WSDK;
if (!WSDK) {
    var WSDK = (function () {
        return {
            login: function (username, password) {
                window.external.Login(username, password);
            },
            loadTests: function (callback) {
                var callbackName = 'loadTestsCallback'
                window[callbackName] = callback;
                window.external.loadTests(callbackName);
            }
        };
    })();
}

