/// <reference path="D:\Workspace\SuccessAdmin\AdminTool\assets/libs/angular/angular.js" />
(function (app) {
    app.controller('examAddController', examAddController);

    examAddController.$inject = ['$scope', 'apiService'];

    function examAddController($scope, apiService) {
        $scope.exam = {};

        $scope.addNewExam = function () {
            console.log($scope.exam);

            apiService.post('http://localhost/KdcTest/api/exam/createnewexam', $scope.exam, function (result) {
                console.log(result);
            }, function (error) {
                console.log(error);
            });
        }
    }

})(angular.module('admintool.exam'));