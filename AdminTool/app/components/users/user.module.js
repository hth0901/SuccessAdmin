/// <reference path="D:\Workspace\SuccessAdmin\AdminTool\assets/libs/angular/angular.js" />
(function () {
    angular.module('admintool.user', ['admintool.common']).config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider.state('users', {
            url: '/users',
            templateUrl: '/app/components/users/usersListView.html',
            controller: 'usersListController'
        })
        .state('user_add', {
            url: '/user_add',
            templateUrl: '/app/components/users/userAddView.html',
            controller: 'userAddController'
        });
    }
})();