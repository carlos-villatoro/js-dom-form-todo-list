document.addEventListener('DOMContentLoaded',() => {
    const todoList = document.querySelector('#current')
    const finishedList = document.querySelector('#finished')
    
    

    document.querySelector('#todo').addEventListener("submit", event => {
            // dont refresh the page, which is the default behavior
            // submit events refresh the page
            event.preventDefault() // dont refresh page
            //get value from input
            const todoInput = document.querySelector('#todo-input')
            // create list item
            const newLi = document.createElement('li')
            // set text of new list to be input value
            newLi.innerText = todoInput.value
            // clear input
            todoInput.value = ''
            // make delete button
            const deleteButton = document.createElement('button')
            deleteButton.innerText = 'finished'
            deleteButton.addEventListener('click', () => {
                // remove the todo from the current list
                todoList.removeChild(newLi)
                // remove delete button
                newLi.removeChild(deleteButton)
                // add to list of finished
                finishedList.append(newLi)
                // apply strike through text decoration
                newLi.style.textDecoration = 'line-through'
            })
            newLi.append(deleteButton)
            //append list
            todoList.append(newLi)
        })





})