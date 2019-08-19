/// <reference path="D:\Workspace\SuccessAdmin\AdminTool\assets/libs/angular/angular.js" />
(function () {
    angular.module('admintool.exam', ['admintool.common']).config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider
        //.state('base', {
        //    url: '',
        //    templateUrl: '/app/shared/views/baseView.html',
        //    abstract: true
        //})
        .state('exam_list', {
            url: '/exam_list',
            //parent: 'base',
            templateUrl: '/app/components/exam/examListView.html',
            controller: 'examListController'
        })
        .state('exam_add', {
            url: '/exam_add',
            //parent: 'base',
            templateUrl: '/app/components/exam/examAddView.html',
            controller: 'examAddController'
        });
    }
})();