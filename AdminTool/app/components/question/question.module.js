/// <reference path="D:\Workspace\SuccessAdmin\AdminTool\assets/libs/angular/angular.js" />
(function () {
    angular.module('admintool.question', ['admintool.common']).config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider
        //.state('base', {
        //    url: '',
        //    templateUrl: '/app/shared/views/baseView.html',
        //    abstract: true
        //})
        .state('question_list', {
            url: '/question_list',
            //parent: 'base',
            templateUrl: '/app/components/question/questionListView.html',
            controller: 'questionListController'
        })
        .state('question_add', {
            url: '/question_add/:code',
            //parent: 'base',
            templateUrl: '/app/components/question/questionAddView.html',
            controller: 'questionAddController'
        })
        .state('question_edit_state', {
            url: '/question_edit_url/:code',
            //parent: 'base',
            templateUrl: '/app/components/question/questionEditView.html',
            controller: 'questionEditController'
        });
    }
})();