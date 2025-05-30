let btn = document.getElementById('btn-add-task');

btn.addEventListener("click", addTask);


function addTask() {
    let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-start";
    let span = document.createElement("span");
    span.className = "mt-1";
    let deleteButton = document.createElement("button");
    let taskInput = document.getElementById("taskInput"); // For task entries
    let taskList = document.getElementById("taskList"); // For listing tasks

    if (taskInput.value == "") {
        alert("Add a task");
        return;
    }
}
