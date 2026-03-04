
console.log("JS loaded from public");


const startTaskButton = document.querySelector("#start-task")

startTaskButton.addEventListener("click", () => {
    console.log("start clicked");
    //user wants to start task

    document.querySelector("#current-task-card-container").style.display = "none";
    document.querySelector(".d-none").setAttribute("class", "d-block");

    //user can add task notes
    //user can note resources and websites used
})

