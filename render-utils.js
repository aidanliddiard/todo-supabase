export function renderTodo(todo) {
    // create a div and a p tag
    const li = document.createElement('li');
    // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')
    li.classList.add(todo.complete ? 'complete' : 'incomplete');
    // add the 'todo' css class no matter what
    li.classList.add('todo');
    // put the todo's text into the p tag
    li.textContent = todo.todo;
    // return the div
    return li;
}