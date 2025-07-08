var todoInputEl = document.getElementById("todo_input");
var addItemBtnEl = document.getElementById("add_item_btn");
var todoListEl = document.getElementById("list_container");
var deleteAllItemBtnEl = document.getElementById("delete_all_item_btn");

// Note: Delete all function
function deleteAllTodoItems() {
  // todoListEl.remove(deleteAllTodoItems);
  todoListEl.innerHTML = "";
  todoInputEl.focus();
}

// Note:Delete function
function deleteTodoItem(listUid) {
  var Id = listUid.toString();
  var listItem = document.getElementById(Id);
  todoListEl.removeChild(listItem);
  todoInputEl.focus();
}

// Note: Edit item function
function editTodoItem(listUid) {
  var Id = listUid.toString();
  var listItem = document.getElementById(Id);
  todoInputEl.value = listItem.childNodes[0].nodeValue;
  // console.log(listItem.childNodes[0].nodeValue);
  todoListEl.removeChild(listItem);
  todoInputEl.focus();
}

// Nopte: Add item function
function addTodoItem() {
  if (todoInputEl.value != "") {
    var generateLiEl = document.createElement("li");
    var deleteBtnEl = document.createElement("button");
    var editBtnEl = document.createElement("button");

    var liTextVal = document.createTextNode(todoInputEl.value);
    var deleteBtnVal = document.createTextNode("Delete");
    var editBtnVal = document.createTextNode("Edit item");

    var uId = Math.ceil(Math.random() * 50) + new Date().getTime().toString();

    generateLiEl.setAttribute("id", uId);
    deleteBtnEl.setAttribute("onclick", "deleteTodoItem(" + uId + ")");
    deleteBtnEl.setAttribute("class", "btn_css_js btn_css_js_delete");
    editBtnEl.setAttribute("class", "btn_css_js");
    editBtnEl.setAttribute("onclick", "editTodoItem(" + uId + ")");

    todoListEl.appendChild(generateLiEl);
    generateLiEl.appendChild(liTextVal);
    generateLiEl.appendChild(deleteBtnEl);
    generateLiEl.appendChild(editBtnEl);
    deleteBtnEl.appendChild(deleteBtnVal);
    editBtnEl.appendChild(editBtnVal);

    document.getElementById("todo_input").value = "";
    document.getElementById("todo_input").focus();
  }
}
