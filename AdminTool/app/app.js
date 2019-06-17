/// <reference path="D:\Workspace\SuccessAdmin\AdminTool\assets/libs/angular/angular.js" />
(function () {
    angular.module('admintool', ['admintool.user','admintool.exam', 'admintool.common']).config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider.state('home', {
            url: '/admin',
            templateUrl: '/app/components/home/homeView.html',
            controller: 'homeController'
        });

        $urlRouterProvider.otherwise('/admin');
    }
})();