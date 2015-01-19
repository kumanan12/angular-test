/**
 * Created by Kumanan on 1/18/2015.
 */
(function () {
    "use strict";
    angular.module("app",["ngRoute"])
        .config(["$routeProvider", function ($routeProvider) {
            $routeProvider
                .when("/", {templateUrl: "app/expense/expense.html"})
                .when("/admin", {templateUrl: "app/admin/admin.html"})
                .otherwise({redirectTo: "/"});

        }]);


})();