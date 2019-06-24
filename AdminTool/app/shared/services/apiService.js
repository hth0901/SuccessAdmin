/// <reference path="D:\Workspace\SuccessAdmin\AdminTool\assets/libs/angular/angular.js" />
(function (app) {
    app.service('apiService', apiService);

    apiService.$inject = ['$http'];

    function apiService($http) {

        function getFunc(url, params, successed, failed) {
            $http.get(url, params).then(function (result) {
                successed(result);
            }, function (error) {
                failed(error);
            })
        };

        function postFunc(url, data, success, fail) {
            $http.post(url, data).then(function (result) {
                success(result)
            }, function (error) {
                fail(error);
            });
        };

        function putFunc(url, data, success, fail) {
            $http.put(url, data).then(function (result) {
                success(result)
            }, function (error) {
                fail(error);
            });
        };

        return {
            get: getFunc,
            post: postFunc,
            put: putFunc
        };
    }
})(angular.module('admintool.common'));