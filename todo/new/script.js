const main = document.querySelector("main");
const todoParent = document.querySelector(".todo");

const createTask = () => {
    const task = prompt("Write you task below:");
    if (task?.trim()) {
        createTaskInternal(task, "todo");
    }
}

const createTaskInternal = (content, state, def = true, id = Date.now(), taskDate = new Date().toLocaleDateString()) => {

    const task = document.createElement("div");
    task.className = "task";
    task.setAttribute("id", id);

    const date = document.createElement("p");
    date.innerText = taskDate;

    const status = document.createElement("select");
    for (let i = 0; i < todoParent.parentNode.children.length; i++) {
        const value = todoParent.parentNode.children[i].classList[1];
        const option = document.createElement("option");
        option.innerText = value;
        if (option.innerText === state) option.setAttribute("selected", "true");
        status.append(option);
    }

    const deleteOption = document.createElement("option");
    deleteOption.innerText = "Delete";
    status.append(deleteOption);

    status.addEventListener("change", (e) => {
        task.remove();
        const id = task.getAttribute("id");
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const currentDeleteIndex = tasks.map((j, i) => {
            if (j.id === id) return true
            else return false
        }).indexOf(true);
        tasks.splice(currentDeleteIndex, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        if (e.target.value !== "Delete") createTaskInternal(content, e.target.value);
    })


    const text = document.createElement("h4");
    text.innerText = content;

    date.append(status);
    task.append(date);
    task.append(text);

    document.querySelector(`.${state}`).append(task);
    if (def) storeCurrentTasks(task);
}

const storeCurrentTasks = (e) => {
    console.log(e);

    const date = e.children[0].innerText.slice(0, 10);
    const content = e.children[1].innerText;
    const status = e.children[0].children[0];
    const id = e.getAttribute("id");
    let currentStatus;
    for (let i = 0; i < status.length; i++) {
        if (status[i].getAttribute("selected"))
            currentStatus = status[i].innerText;
    }
    const tasks = [{ id, date, content, status: currentStatus }];
    const prevTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    prevTasks.push(tasks[0]);
    localStorage.setItem("tasks", JSON.stringify(prevTasks));
}

const tasks = JSON.parse(localStorage.getItem("tasks"))?.reverse() || [];
tasks.forEach((task) => {
    createTaskInternal(task.content, task.status, def = false, id = task.id, taskDate = task.date);
});