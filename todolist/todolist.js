const todolist = JSON.parse(localStorage.getItem('todo')) || [];
displaytodo();
function addTodo() {
    let todo = { name: document.querySelector('.todo-name').value, date: document.querySelector('.todo-date').value };
    todolist.push(todo);
    savetodo();
    displaytodo();
}
function displaytodo() {
    let html = '';
    for (let i = 0; i < todolist.length; i++) {
        html += `<p>${todolist[i].name}</p>
        <p>${todolist[i].date}</p>
        <button class="delete" onclick="todolist.splice(${i} , 1);savetodo();displaytodo();">Delete</button>
        `;
    }
    document.querySelector('.todo').innerHTML = html;
}
function savetodo() {
    localStorage.setItem('todo', JSON.stringify(todolist));
}