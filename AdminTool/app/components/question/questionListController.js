/// <reference path="D:\Workspace\SuccessAdmin\AdminTool\assets/libs/angular/angular.js" />
(function (app) {
    app.controller('questionListController', questionListController);

    questionListController.$inject = ['$scope', 'apiService'];

    function questionListController($scope, apiService) {
        $scope.lstQuestions = [];

        $scope.lstExam = [];

        $scope.examCode = '';

        $scope.getProducts = function () {
            if ($scope.examCode === null)
                return;
            var config = {
                params: {
                    //keyword: $scope.keyword,
                    //page: page,
                    //pageSize: 5,
                    examCode: $scope.examCode || ''
                }
            }

            apiService.get('http://localhost/KdcTest/api/question/getquestionbyexam', config, function (result) {
                //if (result.data.TotalCount == 0) {
                //    notificationService.displayWarning('Khong co ban ghi nao dc tim thay');
                //}
                //else
                //    notificationService.displaySuccess("Da tim thay " + result.data.TotalCount + " ban ghi.");
                //$scope.products = result.data.Items;
                //$scope.page = result.data.Page;
                //$scope.pagesCount = result.data.TotalPages;
                //$scope.totalCount = result.data.TotalCount;
                $scope.lstQuestions = result.data;
                console.log($scope.lstQuestions);
            }, function () {
                console.log('Load product failed!!!');
            });
        };

        function getListExam() {
            apiService.get('http://localhost/KdcTest/api/exam/getallexam', null, function (result) {
                $scope.lstExam = result.data;
            }, function (err) {
                console.log(err);
            });
        }

        getListExam();
    }

})(angular.module('admintool.question'));