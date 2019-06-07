/// <reference path="D:\Workspace\SuccessAdmin\AdminTool\assets/libs/angular/angular.js" />
(function (app) {
    app.controller('usersListController', usersListController);

    usersListController.$inject = ['$scope', 'apiService'];

    function usersListController($scope, apiService) {
        $scope.getAllUser = function () {
            //apiService.get();
        };

        $scope.getAllUser();
    }
})(angular.module('admintool.user'));