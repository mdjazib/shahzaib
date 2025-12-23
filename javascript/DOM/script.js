// console.log(document.getElementsByClassName("one")[0]);
// console.log(document.getElementsByTagName("script"));
// console.log(document.querySelector("#two"));


function button(state) {
    if (state) {
        alert("Bulb is on.");
    } else {
        alert("Bulb is off.");
    }

    // state ? console.log("Bulb is on.") : console.log("Bulb is off.")
}

function changeMyColor(element) {
    element.style.background = "pink";
}

const box = document.querySelector(".box");
box.addEventListener("mouseover", () => {
    box.style.borderRadius = "100%";
})

box.addEventListener("mouseleave", () => {
    box.style.borderRadius = "0%";
})

const cls = (e) => {
    // e.className = "ok"
    e.classList.toggle("etc");
}