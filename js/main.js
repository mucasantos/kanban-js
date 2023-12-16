import Kanban from "./view/Kanban.js";
import Item from "./view/Item.js";


const mainInput = document.querySelector("input")
const addButton = document.querySelector(".button")

addButton.addEventListener("click", () => {
    const item = new Item(1, mainInput.value);
})

new Kanban(
    document.querySelector(".kanban")
)