/// <reference path="D:\Workspace\SuccessAdmin\AdminTool\assets/libs/angular/angular.js" />
(function (app) {
    app.controller('questionEditController', questionEditController);

    questionEditController.$inject = ['$scope', 'apiService', 'notificationService', '$state', '$stateParams'];

    function questionEditController($scope, apiService, notificationService, $state, $stateParams) {
        $scope.lstExam = [];

        $scope.examCode = '';

        $scope.eQuestion = {};
        $scope.eQuestion.PART = "5";

        $scope.ckeditorOptions = {
            language: 'vi',
            height: '200px'
        };

        $scope.correctAnswer = "";

        function getListExam() {
            apiService.get('http://localhost/KdcTest/api/exam/getallexam', null, function (result) {
                $scope.lstExam = result.data;
                console.log($scope.lstExam);
            }, function (err) {
                console.log(err);
            });
        }

        function loadQuestionDetail() {
            let qCode = $stateParams.code;
            apiService.get('http://localhost/KdcTest/api/question/getquestiondetail?questionCode=' + qCode, null, function (result) {
                //$scope.lstExam = result.data;
                $scope.eQuestion = result.data;
                console.log(result.data);
            }, function (err) {
                console.log(err);
            });
        }

        $scope.addNewQuestion = function () {
            $scope.eQuestion.EXAM_CODE = $scope.examCode;
            console.log($scope.eQuestion);
            

            apiService.post('http://localhost/KdcTest/api/question/updatequestion', $scope.eQuestion, function (result) {
                console.log(result);
                //notificationService.displaySuccess('updated success');
                //$state.go('question_list')
            }, function (error) {
                console.log(error);
            });
        }

        $scope.updateQuestion = function () {
            //console.log($scope.eQuestion);
            apiService.put('http://localhost/KdcTest/api/question/updatequestion', $scope.eQuestion, function (result) {
                console.log(result);
                notificationService.displaySuccess('updated success');
                //$state.go('question_list')
            }, function (error) {
                console.log(error);
            });
        }

        loadQuestionDetail();
    }

})(angular.module('admintool.question'));