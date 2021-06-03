import {TodoPage} from "../page-objects/todo-page";

describe('Visual validations with Applitools', () => {

    const todoPage = new TodoPage()

    before(() => todoPage.navigate())
    // before(() => cy.visit('http://todomvc-app-for-testing.surge.sh/?different-title-color'))
    beforeEach(() => cy.eyesOpen({
        appName: 'TAU TodoMVC',
        batchName: 'TAU TodoMVC',
        browser:[
            {name: 'chrome', width: 1024, height: 768},
            {name: 'chrome', width: 800, height: 600},
            {name: 'firefox', width: 1024, height: 768},
            {deviceName: 'iPhone X'},
        ]
    }))
    afterEach(() => cy.eyesClose())

    it('Should be visually ok', () => {

        cy.eyesCheckWindow('Empty todo list')

        todoPage.addTodo('Todo 1')
        todoPage.addTodo('Todo 2')

        cy.eyesCheckWindow('Two todos added')

        todoPage.toggleTodo(1)

        cy.eyesCheckWindow('Mark one todo as completed')
    })
})