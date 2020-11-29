class ToDoListPage {

    get todoListUI () { return $('#container') }
    get addNewTodo () { return $('#container > input[type=text]') }
    get todoList () { return $$('#container li') }
    get todoListCompleted () { return $$('#container ul [class=completed]') }

    addTodo(description) {
        this.addNewTodo.setValue(description);
        browser.keys('\uE007'); // ENTER
    }

    getNewTodoText(newTodoIndex) {
        return this.todoList[newTodoIndex].getText();
    }

    markAsCompleted (todoIndex) {
        this.todoList[todoIndex].$('button').click();
    }
    
    open () {
        return browser.url(`http://webdriveruniversity.com/To-Do-List/index.html`)
    }
}

module.exports = new ToDoListPage();