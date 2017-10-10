angular
    .module('testList', [])
    .controller('TestListController', function TestListController($scope, $http) {
        var _this = $scope;
        WSDK.loadTests(function (data) {
            _this.tests = JSON.parse(data);
        });
    });