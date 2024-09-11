const btn = document.querySelector("button");
var tasks = [];

btn.addEventListener("click", function add() {
  const todo = document.querySelector("#todo").value;
  if (todo.length > 0) {
    tasks.push(todo);
    console.log(tasks);
    displayHtml();
    const clearTodo = document.querySelector("#todo");
    clearTodo.textContent = " ";
  }
  const clearTodo = document.querySelector("#todo").value;
  clearTodo.textContent = " ";
});
function displayHtml() {
  const items = function (item) {
    return `<li>${item}</li>`;
  };

  const html = tasks.map(items).join("");
  const list = document.querySelector("#todoList");
  list.innerHTML = html;
}
