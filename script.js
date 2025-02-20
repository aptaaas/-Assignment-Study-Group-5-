document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const addButton = document.getElementById("addButton");

    addButton.addEventListener("click", () => {
        let taskText = taskInput.value.trim();
        if (taskText === "") return;

        let li = document.createElement("li");
        let span = document.createElement("span");
        span.textContent = taskText;

        let editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.className = "edit-btn";
        
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";

        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = "";
    });

    taskList.addEventListener("click", (event) => {
        if (event.target.classList.contains("delete-btn")) {
            event.target.parentElement.remove();
        } else if (event.target.classList.contains("edit-btn")) {
            let li = event.target.parentElement;
            let newText = prompt("Edit Task:", li.firstChild.textContent.trim());
            if (newText) li.firstChild.textContent = newText;
        }
    });
});
