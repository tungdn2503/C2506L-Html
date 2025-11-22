let input = document.getElementById("task");
let add = document.getElementById("add");
let list = document.getElementById("list");
add.onclick = function () {
    let text = input.value.trim();
    if (text === "") return;
    let li = document.createElement("li");
    li.className = "item";
    li.innerHTML = `
        <span class="text">${text}</span>
        <button class="btn complete">Hoàn thành</button>
        <button class="btn remove">Xóa</button>
    `;
    li.querySelector(".complete").onclick = function () {
        li.querySelector(".text").classList.toggle("done");
    };
    li.querySelector(".remove").onclick = function () {
        li.remove();
    };
    list.appendChild(li);
    input.value = "";
};
