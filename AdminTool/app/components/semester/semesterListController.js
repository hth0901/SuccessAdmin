(function (app) {
    app.controller('semesterListController', semesterListController);

    semesterListController.$inject = ['$scope', 'apiService'];

    function semesterListController($scope, apiService) {
        $scope.lstSemester = [];

        $scope.getAllSemester = function () {
            apiService.get('http://localhost:3433/api/semester/getallsemester', null, function (result) {
                console.log(result);
            }, function (error) {
                console.log(error);
            });
        }

        $scope.getAllSemester();
    }
})(angular.module('admintool.semester'));