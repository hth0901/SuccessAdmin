(function (app) {
    app.controller('semesterAddController', semesterAddController);

    semesterAddController.$inject = ['$scope', 'apiService'];

    function semesterAddController($scope, apiService) {
        $scope.addNewSemester = function () {

        }
    }
})(angular.module('admintool.semester'));