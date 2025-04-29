
document.getElementById("addTask").addEventListener('click', () => {

    const taskInput = document.getElementById("taskInput").value;

    if (taskInput.trim() == "") {
        alert("Please enter a task.");
        return;
    }

    //create a li element
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center list-group-item-success";

    //create a span with content as the task added and append to li
    const span = document.createElement("span");
    span.textContent = taskInput;
    li.appendChild(span);

    //create a delete button and append to li
    const deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("delete"));
    deleteButton.className = "btn btn-sm btn-danger";
    li.appendChild(deleteButton);

    //append li to ul
    document.getElementById("taskList").appendChild(li);
    document.getElementById("taskInput").value = "";

    // Delete specific task
    deleteButton.addEventListener("click", () => {
        taskList.removeChild(li);
    });

    //Strike completed task
    span.addEventListener('click', () => {
        span.classList.toggle('strike');
    });
})