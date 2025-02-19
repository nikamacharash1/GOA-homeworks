// To-Do List Project Tasks
// HTML Structure: Create a basic HTML layout with an input field, an "Add" button, and an empty list container.

// JavaScript Setup: Link your JavaScript file to your HTML.

// Add Task Functionality:
// When the "Add" button is clicked, create a new list item (li) element with the task's text.
// Append this new list item to the task list (ul element).
// Clear the input field after adding the task.

// Delete Task Functionality:
// Add a "Delete" button to each task item when it’s created.
// Set up an event listener to remove the task item from the list when the "Delete" button is clicked.

// Edit Task Functionality:
// Add an "Edit" button next to each task item.
// When the "Edit" button is clicked, replace the task text with an input field containing the current task text.
// Add a "Save" button to confirm the changes.
// When the "Save" button is clicked, update the task item with the edited text and remove the input field.

// Clear All Tasks (Optional):
// Add a button to clear all tasks from the list at once.

// Styling (Optional):
// Style your task list, buttons, and input field for a polished look.

// ---

// With these steps, you’ll get hands-on practice with createElement, appendChild, removeChild, and updating elements in the DOM.




// script.js

// script.js

// script.js

// Grab references to the elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearAllBtn = document.getElementById("clearAllBtn");

// Add Task Functionality
addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    // If the input field is not empty
    if (taskText) {
        const li = document.createElement("li");

        // Create the task text element
        const span = document.createElement("span");
        span.textContent = taskText;

        // Create Edit and Delete buttons
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        // Append elements to the list item
        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";

        // Delete Task Functionality
        deleteBtn.addEventListener("click", () => {
            taskList.removeChild(li); // Remove the task item
        });

        // Edit Task Functionality
        editBtn.addEventListener("click", () => {
            // Replace task text with input field
            const inputField = document.createElement("input");
            inputField.type = "text";
            inputField.value = span.textContent;
            li.replaceChild(inputField, span);

            // Replace the Edit button with Save button
            const saveBtn = document.createElement("button");
            saveBtn.textContent = "Save";
            li.replaceChild(saveBtn, editBtn);

            // Save edited task
            saveBtn.addEventListener("click", () => {
                span.textContent = inputField.value;
                li.replaceChild(span, inputField);
                li.replaceChild(editBtn, saveBtn);
            });
        });
    }
});

// Clear All Tasks Functionality
clearAllBtn.addEventListener("click", () => {
    taskList.innerHTML = ""; // Clear all tasks in the task list
});
