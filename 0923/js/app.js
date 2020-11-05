
class App {
    constructor() {
        //로컬 스토리지
        this.local = window.localStorage;
        this.todoList = JSON.parse(this.local.getItem("todoList")) != null ? JSON.parse(this.local.getItem("todoList")) : [];
        this.idx = this.local.getItem("idx") != null ? this.local.getItem("idx") * 1 : 0;

        //기본 돔 잡기
        this.listDom = document.querySelector('#list');
        this.title = document.querySelector("#title");
        this.content = document.querySelector("#content");
        this.garbage = document.querySelector("#garbage");
        this.msgBox = document.querySelector(".msg_box");
        //시작
        this.init();
    }
    init() {
        this.listDom.innerHTML = '';
        this.addEvent();
        this.drawTodo();
    }
    addEvent() {
        document.querySelector("#addBtn").addEventListener("click", this.addBtnClickEventHandler);
        this.garbage.addEventListener("dragover", e => e.preventDefault());
        this.garbage.addEventListener("drop", this.itemDropEventHandler);
    }
    
    itemDropEventHandler = e => {
        const IDX = e.dataTransfer.getData("idx");
        const RESULT = this.todoList.splice(this.todoList.findIndex(x => x.IDX == IDX), 1);
        RESULT[0].DOM.classList.add("off");
        setTimeout(() => { RESULT[0].DOM.remove(); }, 800);
        this.local.setItem("todoList", JSON.stringify(this.todoList));
        this.showToast("삭제되었읍니다..");
    }
    addBtnClickEventHandler = e => {
        const TITLE = this.title.value;
        const CONTENT = this.content.value;

        if (TITLE === "" || CONTENT === "") {
            this.showToast("필수값이 비어있습니다.");
            return;
        }

        const IDX = this.idx;
        const DOM = this.makeTodoDom({ IDX, TITLE, CONTENT });
        this.todoList.push({ IDX, TITLE, CONTENT, DOM });
        this.listDom.appendChild(DOM);
        this.title.value = "";
        this.content.value = "";

        this.showToast("잘 들갓읍니다.");
        setTimeout(() => { DOM.classList.add("on"); }, 1);

        this.idx++;
        this.local.setItem("todoList", JSON.stringify(this.todoList));
        this.local.setItem("idx", this.idx);
        DOM.addEventListener("dragstart", this.itemDragStartEventHandler);
    }

    itemDragStartEventHandler = e => {
        const IDX = e.target.dataset.idx;
        e.dataTransfer.setData("idx", IDX);
    }
    drawTodo() {
        this.todoList.forEach(item => {
            const {TITLE , CONTENT , IDX} = item;
            const DOM = this.makeTodoDom({ IDX, TITLE, CONTENT });
            item.DOM = DOM;
            DOM.classList.add("on");
            this.listDom.appendChild(DOM);

            DOM.addEventListener("dragstart", this.itemDragStartEventHandler);
        });
    }
    showToast(msg) {
        this.msgBox.innerHTML = msg;
        this.msgBox.classList.add("on");
        setTimeout(() => { this.msgBox.classList.remove("on"); }, 2000);
    }
    makeTodoDom({ TITLE, CONTENT, IDX }) {
        const div = document.createElement('div');
        div.innerHTML =
            `<div class="item" data-idx="${IDX}" draggable="true">
            <h4 class="title">${TITLE}</h4>
            <span class="msg">${CONTENT}</span>
        </div>`;

        return div.firstChild;
    }

}
const log = console.log;
window.addEventListener('load', () => {
    window.app = new App();
});