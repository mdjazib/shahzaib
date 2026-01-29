const tableElement = document.querySelector("table");
const printTable = (e) => {
    const table = e.value;
    e.value = table.slice(0, 4);
    tableElement.innerHTML = "";
    if (Number(table)) {
        for (let i = 1; i <= 10; i++) {
            const tr = document.createElement("tr");
            tr.innerHTML = `<td>${table}</td><td>x</td><td>${i}</td><td>=</td><td>${table * i}</td>`
            tableElement.append(tr);
        }
    }
}