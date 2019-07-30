(function (app) {
    app.controller('loginController', loginController);

    loginController.$inject = ['$scope', '$state', 'apiService'];

    function loginController($scope, $state, apiService) {
        $scope.userLogin = {};

        $scope.loginSubmit = function () {
            //$state.go('home');
            //console.log("doLogin()");
            //console.log($scope.userLogin);
            let url = 'http://localhost/KdcTest/api/login/dologin';
            //url = 'http://localhost:3433/api/login/dologin'
            apiService.post(url, $scope.userLogin, function (result) {
                console.log(result);
            }, function (error) {
                console.log(error);
            });
        }
        //console.log("doLogin()");
    }
})(angular.module('admintool.login'));