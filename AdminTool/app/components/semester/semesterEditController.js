(function (app) {
    app.controller('semesterEditController', semesterEditController);

    semesterEditController.$inject = ['$scope', 'apiService'];

    function semesterEditController($scope, apiService) {
        $scope.eSemeter = {};

        $scope.getSemester = function () {
            console.log($scope.eSemeter);
            let config = {
                params: {
                    semesterCode: '123123'
                }
            }
            apiService.get('http://localhost:3433/api/semester/getdetail', config, function (result) {
                console.log(result);
            }, function (error) {
                console.log(error);
            });
        }

        $scope.getSemester();
    }
})(angular.module('admintool.semester'));