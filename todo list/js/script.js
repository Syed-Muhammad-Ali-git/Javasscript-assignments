// var todoInputEl = document.getElementById("todo_input");
// var addItemBtnEl = document.getElementById("add_item_btn");
// var todoListEl = document.getElementById("list_container");
// var deleteAllItemBtnEl = document.getElementById("delete_all_item_btn");

// function deleteAllTodoItems() {
//   todoListEl.innerHTML = "";
//   todoInputEl.focus();
// }

// function deleteTodoItem(listUid) {
//   var listItem = document.getElementById(listUid);
//   todoListEl.removeChild(listItem);
//   todoInputEl.focus();
// }

// function editTodoItem(listUid) {
//   var listItem = document.getElementById(listUid);
//   var taskText = listItem.querySelector(".task-text").innerText;
//   todoInputEl.value = taskText;
//   todoListEl.removeChild(listItem);
//   todoInputEl.focus();
// }

// function addTodoItem() {
//   var inputValue = todoInputEl.value.trim();
//   if (inputValue !== "") {
//     var listUid = "id_" + new Date().getTime();

//     var li = document.createElement("li");
//     li.className = "todo-item";
//     li.setAttribute("id", listUid);

//     var span = document.createElement("span");
//     span.className = "task-text";
//     span.innerText = inputValue;

//     var btnWrapper = document.createElement("div");
//     btnWrapper.className = "todo-buttons";

//     var editBtn = document.createElement("button");
//     editBtn.className = "btn btn-warning btn-sm";
//     editBtn.innerText = "Edit";
//     editBtn.setAttribute("onclick", "editTodoItem('" + listUid + "')");

//     var deleteBtn = document.createElement("button");
//     deleteBtn.className = "btn btn-danger btn-sm";
//     deleteBtn.innerText = "Delete";
//     deleteBtn.setAttribute("onclick", "deleteTodoItem('" + listUid + "')");

//     btnWrapper.appendChild(editBtn);
//     btnWrapper.appendChild(deleteBtn);

//     li.appendChild(span);
//     li.appendChild(btnWrapper);

//     todoListEl.appendChild(li);

//     todoInputEl.value = "";
//     todoInputEl.focus();
//   }
// }

const todoInputEl = document.getElementById("todo_input");
const todoListEl = document.getElementById("list_container");

function deleteAllTodoItems() {
  todoListEl.innerHTML = "";
  todoInputEl.focus();
}

function deleteTodoItem(id) {
  const item = document.getElementById(id);
  if (item) {
    todoListEl.removeChild(item);
  }
  todoInputEl.focus();
}

function editTodoItem(id) {
  const item = document.getElementById(id);
  const taskText = item.querySelector(".task-text").innerText;
  todoInputEl.value = taskText;
  todoListEl.removeChild(item);
  todoInputEl.focus();
}

function addTodoItem() {
  const inputValue = todoInputEl.value.trim();
  if (inputValue !== "") {
    const listId = "id_" + Date.now();

    const li = document.createElement("li");
    li.className = "todo-item";
    li.id = listId;

    const span = document.createElement("span");
    span.className = "task-text";
    span.innerText = inputValue;

    const btnWrapper = document.createElement("div");
    btnWrapper.className = "todo-buttons";

    const editBtn = document.createElement("button");
    editBtn.className = "btn btn-warning btn-sm";
    editBtn.innerText = "Edit";
    editBtn.onclick = () => editTodoItem(listId);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm";
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = () => deleteTodoItem(listId);

    btnWrapper.appendChild(editBtn);
    btnWrapper.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(btnWrapper);

    todoListEl.appendChild(li);

    todoInputEl.value = "";
    todoInputEl.focus();
  }
}
