(function () {
    var app = angular.module('todoServices', ['ngRoute', 'ngResource', 'todoRoutes']);
    app.factory('Todos', ['$resource', function ($resource) {
            return $resource('/todos/:id', null, {
                'update': { method: 'PUT' }
            });
        }]);
})();
//# sourceMappingURL=todoservices.js.map