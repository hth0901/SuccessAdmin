(function (app) {
    app.filter('statusFilter', function () {
        return function (input) {
            if (input === true)
                return 'yes';
            else
                return 'no';
        };
    });
})(angular.module('admintool.common'));