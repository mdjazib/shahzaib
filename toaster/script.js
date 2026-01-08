function create() {
    const width = document.querySelector(".width").value;
    const height = document.querySelector(".height").value;
    const radius = document.querySelector(".radius").value;
    const color = document.querySelector(".color").value;
    const element = document.createElement("div");
    element.style.width = `${width}px`;
    element.style.height = `${height}px`;
    element.style.backgroundColor = color;
    element.style.position = "fixed";
    element.style.borderRadius = `${radius}px`;
    const box = element;
    const moveBox = (e) => {
        box.style.left = `${(e.x - (box.getBoundingClientRect().width / 2))}px`;
        box.style.top = `${(e.y - (box.getBoundingClientRect().height / 2))}px`;
    }
    element.addEventListener("mousedown", () => {
        window.addEventListener("mousemove", moveBox)
    })

    element.addEventListener("mouseup", () => {
        window.removeEventListener("mousemove", moveBox)
    })
    document.body.append(element);
}
