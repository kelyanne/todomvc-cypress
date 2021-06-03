import { TodoPage } from "../page-objects/todo-page";

describe('My first test', function () {
  const todoPage = new TodoPage()
  beforeEach(function () {
    todoPage.navigate()
    todoPage.addTodo('Clean room')
  })

  it('Should add a new todo list to the list', () => {
    todoPage.validateTodoTxt(1, 'Clean room')
    todoPage.validateToggleState(1, false)
  })

  it('Should mark a todo list as completed', () => {
    todoPage.clickClassElement('.toggle')
    todoPage.validateCompletedTask(1, true)
    
  })

  it('Should clear completed todos', () => {
    todoPage.clickClassElement('.toggle')
    todoPage.clickContainsText('Clear')
    todoPage.validateNumberOfTodosShow(0)
  })
})
