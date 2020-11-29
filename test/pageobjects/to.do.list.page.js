class ToDoListPage {

    get todoListUI () {return $('#container')}
    get addNewTodoInput () {return $('[placeholder^=Add]')}
    get todoList () {return $$('#container ul')}
    get todoListCompleted () {return $$('#container ul [class=completed]')}

    addNewTodo() {

    }
    
    open () {
        return browser.url(`http://webdriveruniversity.com/To-Do-List/index.html`)
    }
}

module.exports = new ToDoListPage();