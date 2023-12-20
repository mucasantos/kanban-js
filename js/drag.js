const draggables = document.querySelectorAll(".task")
const droppables = document.querySelectorAll(".swim-lane")

//1. Adcionar os listeners

draggables.forEach((task) => {
    task.addEventListener("dragstart", () => {
        task.classList.add("is-dragging")
    });
    task.addEventListener("dragend", () => {
        task.classList.remove("is-dragging")
    });
});

droppables.forEach((zone) => {
    zone.addEventListener("dragover", (e) => {
        e.preventDefault();

        const bottomTask = insertAboveTask(zone, e.clientY);
        const currentTask = document.querySelector(".is-dragging");

        if (!bottomTask){
            zone.appendChild(currentTask);
        }else{
            zone.insertBefore(currentTask, bottomTask);
        }
    });
});

const insertAboveTask = (zone, mouseY) => {
    const els = zone.querySelectorAll(".task:not(.is-dragging)");
    
    let closesTask = null;
    let closesOffset = Number.NEGATIVE_INFINITY;

    els.forEach((task) => {
        const { top } = task.getBoundingClientRect();

        const offset = mouseY - top;

        if (offset < 0 && offset > closesOffset) {
            closesOffset = offset;
            closesTask = task;
        }
    });
    return closesTask;

}