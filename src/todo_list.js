const toDos = JSON.parse(localStorage.getItem('todos')) || [];
const ul = document.querySelector('.todos');
const form = document.querySelector('.add-todo-form');
const checkboxes = document.querySelectorAll('input[type="checkbox"]')

function addTodo(e) {
    e.preventDefault();
    const input = document.querySelector('input[name="add-todo"]');
    const inputValue = input.value;
    const todo = {
        inputValue,
        done: false
    }
    toDos.push(todo);
    form.reset()
    populateList([toDos[toDos.length - 1]])

    localStorage.setItem('todos', JSON.stringify(toDos))
}


function populateList(todos) {
    todos.forEach(todo => {
        const label = document.createElement("label");
        label.innerHTML = todo["inputValue"];

        const input = document.createElement("input");
        input.setAttribute("data-todo", todo["inputValue"])
        input.setAttribute("type", "checkbox");
        if (todo["done"] === "true") {
        input.checked = true;
        }
        const li = document.createElement("li");
        li.appendChild(label);
        li.appendChild(input);

        const ul = document.querySelector(".todos");
        ul.appendChild(li);
    });

}


form.addEventListener("submit", addTodo)
ul.addEventListener("click", (e) => {
    if (e.target.type === "checkbox") {
        const todo = e.target.getAttribute("data-todo")
        const ls = JSON.parse(localStorage.getItem('todos'))
        for (i = 0; i < ls.length; i ++) {
            const obj = ls[i]
            if (obj["inputValue"] === todo) {
                // obj["done"] = "true"; 
                obj["done"] = obj["done"] === "true" ? "false" : "true";
            }
        }
        localStorage.setItem('todos', JSON.stringify(ls))

    }
})
populateList(toDos);


// localStorage.setItem('todos', JSON.stringify(toDos))
