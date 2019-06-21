/// <reference path="D:\Workspace\SuccessAdmin\AdminTool\assets/libs/angular/angular.js" />
(function (app) {
    app.controller('questionAddController', questionAddController);

    questionAddController.$inject = ['$scope', 'apiService'];

    function questionAddController($scope, apiService) {
        $scope.lstExam = [];

        $scope.examCode = '';

        function getListExam() {
            apiService.get('http://localhost/KdcTest/api/exam/getallexam', null, function (result) {
                $scope.lstExam = result.data;
                console.log($scope.lstExam);
            }, function (err) {
                console.log(err);
            });
        }

        getListExam();
    }

})(angular.module('admintool.question'));