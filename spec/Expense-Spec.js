/**
 * Created by Kumanan on 1/18/2015.
 */
describe("Expense objects", function () {
    var expense, expenseItem
    beforeEach(function () {
            expenseItem=new ExpenseItem(100);
            expense=new Expense(expenseItem);
        }
    );


   it("All Expense should be of type ExpenseItem", function () {
       expect(expense.expenseItem).toBe(expenseItem);
   });

    it("should have the correct expense amount", function () {
        expect(expense.expenseItem.amount).toEqual(100);
    });
});