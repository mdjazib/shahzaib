const todoParent = document.querySelector(".todo");
const createTask = () => {
    const task = prompt("Write you task below:");
    createTaskInternal(task, "todo");
}
const createTaskInternal = (content, state) => {

    const task = document.createElement("div");
    task.className = "task";

    const date = document.createElement("p");
    date.innerText = new Date().toLocaleDateString();

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
        if (e.target.value !== "Delete") createTaskInternal(content, e.target.value);
    })


    const text = document.createElement("h4");
    text.innerText = content;

    date.append(status);
    task.append(date);
    task.append(text);

    document.querySelector(`.${state}`).append(task);
}