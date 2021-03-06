/**
 * Created by Kumanan on 1/19/2015.
 */
(function () {
    "use strict";
    angular.module("app")
        .controller("expensesController",["expensesDataService", expensesController]);

    function expensesController(expensesDataService){
        var vm=this;
        vm.activate=activate;
        vm.expenseItems=[];

        activate();

        function activate(){
            vm.expenseItems =expensesDataService.getExpenses();
        }

    }

})();
