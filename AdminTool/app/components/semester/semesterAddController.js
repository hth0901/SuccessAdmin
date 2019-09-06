(function (app) {
    app.controller('semesterAddController', semesterAddController);

    semesterAddController.$inject = ['$scope', 'apiService'];

    function semesterAddController($scope, apiService) {
        $scope.eSemeter = {
            
        };

        $scope.addNewSemester = function () {
            console.log($scope.eSemeter);
        }
    }
})(angular.module('admintool.semester'));