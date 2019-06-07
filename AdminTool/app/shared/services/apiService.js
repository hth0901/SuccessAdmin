/// <reference path="D:\Workspace\SuccessAdmin\AdminTool\assets/libs/angular/angular.js" />
(function (app) {
    app.service('apiService', apiService);

    apiService.$inject = ['$http'];

    function apiService($http) {
        return {
            get: getFunc
        };

        function getFunc(url, params, successed, failed) {
            $http.get(url, params).then(function (result) {
                successed(result);
            }, function (error) {
                failed(error);
            })
        };
    }
})(angular.module('admintool.common'));