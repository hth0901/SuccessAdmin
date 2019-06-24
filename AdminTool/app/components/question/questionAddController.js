﻿/// <reference path="D:\Workspace\SuccessAdmin\AdminTool\assets/libs/angular/angular.js" />
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

        $scope.eQuestion = {};
        $scope.eQuestion.PART = "5";

        $scope.addNewQuestion = function () {
            $scope.eQuestion.EXAM_CODE = $scope.examCode;
            console.log($scope.eQuestion);
            

            apiService.post('http://localhost/KdcTest/api/question/createnewquestion', $scope.eQuestion, function (result) {
                console.log(result);
            }, function (error) {
                console.log(error);
            });
        }
    }

})(angular.module('admintool.question'));