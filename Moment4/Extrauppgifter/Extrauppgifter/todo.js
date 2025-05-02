
document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTask = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");
    const clearTasks = document.getElementById("clearTasks");

    addTask.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.textContent = taskText;
            li.addEventListener("click", () => li.classList.toggle("done"));
            const del = document.createElement("button");
            del.textContent = "❌";
            del.addEventListener("click", () => li.remove());
            li.appendChild(del);
            taskList.appendChild(li);
            taskInput.value = "";
        }
    });

    clearTasks.addEventListener("click", function () {
        taskList.innerHTML = "";
    });
});
