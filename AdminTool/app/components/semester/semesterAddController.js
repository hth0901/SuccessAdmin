(function (app) {
    app.controller('semesterAddController', semesterAddController);

    semesterAddController.$inject = ['$scope', 'apiService'];

    function semesterAddController($scope, apiService) {
        $scope.eSemeter = {};

        $scope.addNewSemester = function () {
            console.log($scope.eSemeter);
            apiService.post('http://localhost:3433/api/semester/createnew', $scope.eSemeter, function (result) {
                console.log(result);
            }, function (error) {
                console.log(error);
            });
        }
    }
})(angular.module('admintool.semester'));