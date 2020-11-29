const ToDoListPage = require('../pageobjects/todo.list.page');

describe('Given the user access to the To-Do-List Page', () => {

    before(() => {
        ToDoListPage.open();
        ToDoListPage.todoListUI.waitForDisplayed({timeout: 2000});
    });

    describe('when the user add a new todo', () => {
        let todoLength

        before(() => {
            todoLength = ToDoListPage.todoList.length;
            ToDoListPage.addTodo('The new QA');
        });

        it('the user should see the todo list updated', () => {
            const newTodoIndex = ToDoListPage.todoList.length - 1;

            expect(ToDoListPage.todoList).toBeElementsArrayOfSize(todoLength + 1);
            expect(ToDoListPage.getNewTodoText(newTodoIndex)).toBe('The new QA');
            browser.pause(4000);
        });
    });

    describe('when the mark the new todo as completed', () => {
        
        it('the user should see the new todo marked', () => {

        });    
    });
});


