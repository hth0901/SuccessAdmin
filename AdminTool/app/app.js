/// <reference path="D:\Workspace\SuccessAdmin\AdminTool\assets/libs/angular/angular.js" />
(function () {
    angular.module('admintool', ['admintool.user', 'admintool.exam', 'admintool.question', 'admintool.common', 'admintool.semester']).config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider
            //.state('base', {
            //    url: '',
            //    templateUrl: '/app/shared/views/baseView.html',
            //    abstract: true
            //})
            .state('home', {
                url: '/admin',
                //parent: 'base',
                templateUrl: '/app/components/home/homeView.html',
                controller: 'homeController'
            });
            //.state('login', {
            //    url: '/login',
            //    templateUrl: '/app/components/login/loginView.html',
            //    controller: 'loginController'
            //});

        $urlRouterProvider.otherwise('/admin');
    }
})();