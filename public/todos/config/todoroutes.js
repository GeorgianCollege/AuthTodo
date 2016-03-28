(function () {
    var moduleName = "todoRoutes";
    var app = angular.module(moduleName, ['ngRoute', 'ngResource']);
    app.config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/', {
                templateUrl: '/todos.html',
                controller: 'TodoController'
            })
                .when('/:id', {
                templateUrl: '/todoDetails.html',
                controller: 'TodoDetailCtrl'
            });
        }]);
})();
//# sourceMappingURL=todoroutes.js.map