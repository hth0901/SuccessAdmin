/// <reference path="D:\Workspace\SuccessAdmin\AdminTool\assets/libs/angular/angular.js" />
(function (app) {
    app.controller('examListController', examListController);

    examListController.$inject = ['$scope', 'apiService', 'notificationService'];

    function examListController($scope, apiService, notificationService) {
        $scope.lstExam = [];

        $scope.getAllExam = function () {
            apiService.get('http://localhost/KdcTest/api/exam/getallexam', null, function (result) {
                $scope.lstExam = result.data;
                console.log($scope.lstExam);
                notificationService.displaySuccess("sdfsldfsdf");
            }, function (err) {
                console.log(err);
            });
        }

        $scope.getAllExam();
    }

})(angular.module('admintool.exam'));