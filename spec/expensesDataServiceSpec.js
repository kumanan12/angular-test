/**
 * Created by Kumanan on 1/19/2015.
 */
describe("expensesDataService", function () {
    beforeEach(module("app"));
    it("should return 3 items", inject(function (expensesDataService) {
        expect(expensesDataService.getExpenses().length).toBe(3);
    }) )
});
