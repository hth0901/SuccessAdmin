/// <reference path="D:\Workspace\SuccessAdmin\AdminTool\assets/libs/angular/angular.js" />
(function (app) {
    app.controller('examAddController', examAddController);

    examAddController.$inject = ['$scope', 'apiService'];

    function examAddController($scope, apiService) {
        $scope.exam = {};

        $scope.addNewExam = function () {
            console.log($scope.exam);

            let insertResult = false;

            apiService.post('http://localhost/KdcTest/api/exam/createnewexam', $scope.exam, function (result) {
                insertResult = true;
                console.log(result);
            }, function (error) {
                console.log(error);
            });
            console.log(insertResult);
        }
    }

})(angular.module('admintool.exam'));