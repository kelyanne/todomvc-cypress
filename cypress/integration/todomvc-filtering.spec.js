import {TodoPage} from "../page-objects/todo-page";

describe('Testing the filters', () => {

    const todoPage = new TodoPage();

    beforeEach(() => {
        todoPage.navigate()
        todoPage.addTodo('Todo 1')
        todoPage.addTodo('Todo 2')
        todoPage.addTodo('Todo 3')
        todoPage.toggleTodo(2)
    })

    it('Should filter "Actions" todos', () => {
        todoPage.clickContainsText('Active')
        todoPage.validateNumberOfTodosShow(2)
    })

    it('Should filter "Completed" todos', () => {
        todoPage.clickContainsText('Completed')
        todoPage.validateNumberOfTodosShow(1)
    })

    it('Should filter "All" todos', () => {
        todoPage.clickContainsText('All')
        todoPage.validateNumberOfTodosShow(3)
    })
})