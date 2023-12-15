import KanbanAPI from '../api/KanbanAPI.js'
import DropZone from './Dropzone.js';
import Item from './Item.js';

export default class Column {

    constructor(id, title,color) {
        const topDropZone = DropZone.createDropZone();
        this.elements = {}
        this.elements.root = Column.createRoot();
        this.elements.title = this.elements.root.querySelector(".kanban__column-title")
        this.elements.items = this.elements.root.querySelector(".kanban__column-items")
        this.elements.addItem = this.elements.root.querySelector(".kanban__add-item")

        this.elements.root.dataset.id = id;
        this.elements.title.textContent = title;
        this.elements.items.appendChild(topDropZone)

        this.elements.root.style.backgroundColor = color;


        this.elements.addItem.addEventListener("click", () => {
            //TODO: add item
            const newItem = KanbanAPI.insertItem(id, "")

            this.renderItem(newItem)
        })

        KanbanAPI.getItems(id).forEach(item => {
            this.renderItem(item)
        })
    }

    static createRoot() {
        const range = document.createRange();

        range.selectNode(document.body)

        return range.createContextualFragment(`
        <div class="kanban__column">
        <div class="kanban__column-title"></div>
        <div class="kanban__column-items"></div>
        <button class="kanban__add-item">+ Adicionar</button>
    </div>
        `).children[0];
    }

    renderItem(data) {
        //TODO: criar instancias de Item

        const item = new Item(data.id, data.content);
        this.elements.items.appendChild(item.elements.root);
    }
}