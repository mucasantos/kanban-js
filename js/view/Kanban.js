import Column from "./Column.js";

export default class Kanban {
    constructor(root) {
        this.root = root;

        Kanban.columns().forEach(column => {
            //TODO: criar uma instancia da Clase Column

            const columnView = new Column(column.id, column.title, column.color);
            this.root.appendChild(columnView.elements.root)
        })
    }

    static columns() {
        return [
            {
                id: 1,
                title: "Não iniciado",
                color: "#FFC0CB"
            },
            {
                id: 2,
                title: "Em progresso",
                color: "#2986cc"

            },
            {
                id: 3,
                title: "Revisando/Teste",
                color: "#f1c232"

            },
            {
                id: 4,
                title: "Finalizado",
                color: "#3d85c6"

            },
        ]
    }
}