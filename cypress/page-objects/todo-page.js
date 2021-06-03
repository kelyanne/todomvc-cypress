export class TodoPage {
    navigate(){
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
    }

    addTodo(todoTest){
        cy.get('.new-todo').type(todoTest+'{enter}')
    }

    toggleTodo(todoIndex){
        cy.get(`.todo-list li:nth-child(${todoIndex}) .toggle`).click()
    }

    validateTodoTxt(todoIndex, expectedText){
        cy.get(`.todo-list li:nth-child(${todoIndex}) label`).should('have.text', expectedText)
    }

    validateToggleState(toggleIndex, state){
        const toggle = cy.get(`.todo-list li:nth-child(${toggleIndex}) .toggle`)
        toggle.should(`${state ? '' : 'not.'}be.checked`)
    }

    clickClassElement(classElem){
        cy.get(classElem).click()
    }

    clickContainsText(textElem){
        cy.contains(textElem).click()
    }

    validateCompletedTask(todoIndex, shouldBeCompleted){
        const label = cy.get(`.todo-list li:nth-child(${todoIndex}) label`)
        label.should(`${shouldBeCompleted ? '' : 'not.'}have.css`, 'text-decoration-line', 'line-through')
    }

    validateNumberOfTodosShow(expectedNumberOfTodos){
        cy.get('.todo-list li').should('have.length', expectedNumberOfTodos)
    }
}