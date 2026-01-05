const tasks = document.querySelector(".todo");
const completed = document.querySelector(".completed");
const completedText = document.querySelector(".text");

const countCompletedTasks = () => {
    completed.children.length ? completedText.className = "text" : completedText.className = "hide";
}

const createTask = (value, state) => {
    const task = document.createElement("div");
    const checkbox = document.createElement("div");
    const text = document.createElement("p");
    const button = document.createElement("div");
    button.innerText = "╳";
    text.innerText = value;
    button.className = "button";
    button.addEventListener("click", (e) => {
        e.stopPropagation();
        e.target.parentNode.remove();
        countCompletedTasks();
    });
    checkbox.className = "checkbox";
    task.className = "task cup";
    checkbox.innerText = "✔";
    task.addEventListener("click", (e) => {
        createTask(value);
        countCompletedTasks();
        e.target.parentNode.remove();
    })
    task.append(checkbox);
    task.append(text);
    task.append(button);
    state === "todo" ? tasks.append(task) : completed.append(task);
}

const todoInput = (e) => {
    createTask(e.value, "todo");
    e.value = "";
}