/// <reference path="D:\Workspace\SuccessAdmin\AdminTool\assets/libs/angular/angular.js" />
(function (app) {
    app.controller('usersListController', usersListController);

    usersListController.$inject = ['$scope', 'apiService', 'notificationService'];

    function usersListController($scope, apiService, notificationService) {
        $scope.lstUser = [];
        $scope.getAllUser = function () {
            apiService.get('http://localhost/KdcTest/api/kdc/getalluser', null, function (result) {
                $scope.lstUser = result.data;
                notificationService.displaySuccess("sdfsldfsdf");
            }, function (err) {
                console.log(err);
            });
        };

        $scope.getAllUser();
    }
})(angular.module('admintool.user'));