import { 
    checkAuth, 
    createTodo, 
    completeTodo,
    getTodos,
    logout,
    deleteAllTodos, 
} from '../fetch-utils.js';
import { renderTodo } from '../render-utils.js';

checkAuth();

const todoForm = document.querySelector('.todo-form');
const logoutButton = document.querySelector('#logout');
const deleteButton = document.querySelector('.delete-button');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', async(e) => {
    // on submit, create a todo, reset the form, and display the todos
    e.preventDefault();
    
    const data = new FormData(todoForm);
    //console.log(data.get('todo'));
    await createTodo(data.get('todo'));
    displayTodos();
    todoForm.reset();

});

async function displayTodos() {
    // fetch the todos
    todoList.textContent = '';
    const todos = await getTodos();
    // display the list of todos
    for (let todo of todos) {
        const li = renderTodo(todo);
        li.addEventListener('click', async() => {
            // console.log('clicked');
            await completeTodo(todo.id);
            displayTodos();
        });
        todoList.append(li);
    }
    // be sure to give each todo an event listener
    // on click, complete that todo
    
}

displayTodos();
// add an on load listener that fetches and displays todos on load

logoutButton.addEventListener('click', () => {
    logout();
});


deleteButton.addEventListener('click', async() => {
    // delete all todos
    await deleteAllTodos();
    todoList.textContent = '';
    // then refetch and display the updated list of todos
});
