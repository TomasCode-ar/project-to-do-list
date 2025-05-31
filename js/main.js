let taskCounter = 0;

let btn = document.getElementById('btn-add-task');

btn.addEventListener("click", addTask);


function addTask() {
    let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-start";
    let span = document.createElement("span");
    span.className = "mt-1";
    let countTask = document.getElementById("countTask")
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "btn btn-danger";
    let taskInput = document.getElementById("taskInput"); // For task entries
    let taskList = document.getElementById("taskList"); // For listing tasks

    if (taskInput.value == "") {
        alert("Please, write a task!");
        taskInput.focus();
        return;
    }

    span.textContent = taskInput.value; // Lo que esta en la caja de entrada pasa al span
    li.appendChild(span); //Agrego el span dentro del li
    taskCounter++;
    li.appendChild(deleteButton);
    countTask.textContent = "Number of tasks : " + taskCounter;
    taskList.appendChild(li);
    taskInput.value = "";
    taskInput.focus();
    deleteButton.addEventListener('click', function () {
        taskCounter--;
        countTask.textContent = "Number of tasks : " + taskCounter;
         taskList.removeChild(li);
    });
}
