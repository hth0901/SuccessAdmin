/// <reference path="D:\Workspace\SuccessAdmin\AdminTool\assets/libs/angular/angular.js" />
(function () {
    angular.module('admintool.exam', ['admintool.common']).config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider.state('exam_list', {
            url: '/exam_list',
            templateUrl: '/app/components/exam/examListView.html',
            controller: 'examListController'
        })
        .state('exam_add', {
            url: '/exam_add',
            templateUrl: '/app/components/exam/examAddView.html',
            controller: 'examAddController'
        });
    }
})();