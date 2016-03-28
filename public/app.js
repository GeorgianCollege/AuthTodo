(function () {
    var mainApplicationModuleName = "app";
    var app = angular.module(mainApplicationModuleName, ['ngRoute', 'ngResource', 'todoRoutes', 'todoServices', 'todoControllers']);
    angular.element(document).ready(function () {
        angular.bootstrap(document, [mainApplicationModuleName]);
    });
})();
//# sourceMappingURL=app.js.map