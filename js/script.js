document.querySelector('#add').onclick = function() {
    let inputField = document.querySelector('#form_list input'); // Corrected selector
    let tasksContainer = document.querySelector('#tasks');

    if (inputField.value.trim().length == 0) {
        alert("Please enter your task");
    } else {
        // Create new task div
        let taskDiv = document.createElement("div");
        taskDiv.setAttribute("id", "todo");

        // Create span for task text
        let taskSpan = document.createElement("span");
        taskSpan.textContent = inputField.value;

        // Create delete button
        let deleteButton = document.createElement("button"); // Declared deleteButton
        deleteButton.classList.add("delete");
        deleteButton.innerHTML = `<i class="fas fa-trash-alt"></i>`;

        // Append elements to task div
        taskDiv.appendChild(taskSpan);
        taskDiv.appendChild(deleteButton);

        // Append task div to tasks container
        tasksContainer.appendChild(taskDiv);

        // Clear input field
        inputField.value = "";
    }
};

// ✅ Delete task functionality
document.addEventListener('click', function(event) {
    if (event.target.closest(".delete")) {
        event.target.closest("#todo").remove();
    }
});