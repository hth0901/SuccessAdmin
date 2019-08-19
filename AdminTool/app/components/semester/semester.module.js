/// <reference path="D:\Workspace\SuccessAdmin\AdminTool\assets/libs/angular/angular.js" />
(function () {
    angular.module('admintool.semester', ['admintool.common']).config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider
        //.state('base', {
        //    url: '',
        //    templateUrl: '/app/shared/views/baseView.html',
        //    abstract: true
        //})
        .state('semester_list', {
            url: '/semester_list',
            //parent: 'base',
            templateUrl: '/app/components/semester/semesterListView.html',
            controller: 'semesterListController'
        })
        .state('semester_add', {
            url: '/semester_add',
            //parent: 'base',
            templateUrl: '/app/components/semester/semesterAddView.html',
            controller: 'semesterAddController'
        })
        .state('semester_edit', {
            url: '/semester_edit',
            //parent: 'base',
            templateUrl: '/app/components/semester/semesterEditView.html',
            controller: 'semesterEditController'
        });
    }
})();