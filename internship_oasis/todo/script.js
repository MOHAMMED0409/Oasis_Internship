// Get HTML elements
var todoInput = document.getElementById("todo-input");
var addButton = document.getElementById("add-button");
var todoList = document.getElementById("todo-list");
var todoBox = document.querySelector(".todo-box");

// Add event listener to the add button
addButton.addEventListener("click", function() {
  var todoText = todoInput.value;
  if (todoText !== "") {
    createTodoItem(todoText);
    todoInput.value = "";
    todoBox.style.display = "block"; // Show the box when a task is added
  }
});

// Create a new to-do item
function createTodoItem(todoText) {
  var listItem = document.createElement("li");
  var todoLabel = document.createElement("label");
  var todoEditInput = document.createElement("input");
  var deleteButton = document.createElement("button");
  var editButton = document.createElement("button");
  var saveButton = document.createElement("button");
  var cancelButton = document.createElement("button");

  todoLabel.innerText = todoText;
  todoEditInput.value = todoText;
  todoEditInput.type = "text";
  todoEditInput.style.display = "none";
  deleteButton.innerHTML = "Delete";
  deleteButton.className = "delete-button";
  editButton.innerHTML = "Edit";
  editButton.className = "edit-button";
  saveButton.innerHTML = "Save";
  saveButton.className = "save-button";
  saveButton.style.display = "none";
  cancelButton.innerHTML = "Cancel";
  cancelButton.className = "cancel-button";
  cancelButton.style.display = "none";

  editButton.addEventListener("click", function() {
    toggleEditMode(listItem);
  });

  saveButton.addEventListener("click", function() {
    updateTodoItem(listItem);
  });

  cancelButton.addEventListener("click", function() {
    toggleEditMode(listItem);
  });

  deleteButton.addEventListener("click", function() {
    listItem.remove();
    if (todoList.childElementCount === 0) {
      todoBox.style.display = "none"; // Hide the box when all tasks are deleted
    }
  });

  listItem.appendChild(todoLabel);
  listItem.appendChild(todoEditInput);
  listItem.appendChild(deleteButton);
  listItem.appendChild(editButton);
  listItem.appendChild(saveButton);
  listItem.appendChild(cancelButton);
  todoList.appendChild(listItem);
}

// Toggle edit mode for a to-do item
function toggleEditMode(listItem) {
  var todoLabel = listItem.querySelector("label");
  var todoEditInput = listItem.querySelector("input[type='text']");
  var editButton = listItem.querySelector(".edit-button");
  var saveButton = listItem.querySelector(".save-button");
  var cancelButton = listItem.querySelector(".cancel-button");

  todoLabel.style.display = todoLabel.style.display === "none" ? "inline-block" : "none";
  todoEditInput.style.display = todoEditInput.style.display === "none" ? "inline-block" : "none";
  editButton.style.display = editButton.style.display === "none" ? "inline-block" : "none";
  saveButton.style.display = saveButton.style.display === "none" ? "inline-block" : "none";
  cancelButton.style.display = cancelButton.style.display === "none" ? "inline-block" : "none";
}

// Update a to-do item
function updateTodoItem(listItem) {
  var todoLabel = listItem.querySelector("label");
  var todoEditInput = listItem.querySelector("input[type='text']");

  todoLabel.innerText = todoEditInput.value;
  toggleEditMode(listItem);
}
