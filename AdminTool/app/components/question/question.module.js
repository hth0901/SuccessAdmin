/// <reference path="D:\Workspace\SuccessAdmin\AdminTool\assets/libs/angular/angular.js" />
(function () {
    angular.module('admintool.question', ['admintool.common']).config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider.state('question_list', {
            url: '/question_list',
            templateUrl: '/app/components/question/questionListView.html',
            controller: 'questionListController'
        })
        .state('question_add', {
            url: '/question_add',
            templateUrl: '/app/components/question/questionAddView.html',
            controller: 'questionAddController'
        })
    }
})();