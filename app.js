const todoItems = ["pray", "code", "eat", "sleep", "repeat"];
console.log(todoItems);
const todoInput = document.querySelector("#todo-input");

const addBtn = document.querySelector(".add");
addBtn.addEventListener("click", function () {
  const todoItemValue = todoInput.value;
  if (!todoItemValue) {
    alert("Please enter to-do item");
    return;
  }
  todoItems.push(todoItemValue);
  renderTodos();
  todoInput.value = "";
  console.log(todoItems);
});

console.log(todoInput);

const todoListContainer = document.querySelector(".to-do-list");
function renderTodos() {
  todoListContainer.innerHTML = "";
  const todoItemTemplates = todoItems.map(function (item) {
    const pTag = document.createElement("p");
    pTag.className = "todo-item";
    pTag.innerHTML = item;
    todoListContainer.appendChild(pTag);
  });
}
todoItems.pop();
console.log(todoItems);
todoItems.shift();
console.log(todoItems);
