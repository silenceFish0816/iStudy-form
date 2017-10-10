angular.module('coreFilter', [])
    .filter('formatDateTime', function () {
        return function (input) {
            return "".concat(input.substr(0, 4), '-', input.substr(4, 2), '-', input.substr(6, 2), ' ', input.substr(8, 2), ':', input.substr(10, 2), ':', input.substr(12, 2));
        };
    })
    .filter('formatDate', function () {
        return function (input) {
            return "".concat(input.substr(0, 4), '-', input.substr(4, 2), '-', input.substr(6, 2));
        };
    });