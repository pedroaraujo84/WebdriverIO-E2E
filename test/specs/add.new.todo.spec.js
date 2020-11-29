const ToDoListPage = require('../pageobjects/to.do.list.page');

describe('Given the user access to the To-Do-List Page', () => {

    before(() => {
        ToDoListPage.open();
        ToDoListPage.todoListUI.waitForDisplayed({timeout: 2000});
    });

    it('', () => {

    });
});


