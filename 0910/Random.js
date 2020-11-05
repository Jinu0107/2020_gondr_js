const log = console.log;
window.addEventListener('load', () => {
    let app = new App();
});


class App {
    constructor() {
        this.nameList = ["박태양", "강은진", "김가현", "김영현", "김찬영", "김창현",
            "박민지", "박명재", "박수진", "박지호", "이수안", "안진우", "이유진", "이준영",
            "임상언", "임채영", "전제", "정나영", "정재성", "최승민", "하늘새미", "한다원", "조한슬"
        ];
        this.idx = 0;
        this.select_idx = 0;
        this.item_list = [];
        this.selected_list = [];
        this.timer;
        this.item_box = document.querySelector(".item_box");
        this.selected_box = document.querySelector(".selected_box");
        this.stop_btn = document.querySelector(".stop_btn");
        this.add_btn = document.querySelector(".add_btn");
        this.add_input = document.querySelector(".add_input");
        this.init();
    }

    init() {
        this.makeUser();
        this.addEvent();
    }

    addEvent() {
        this.stop_btn.addEventListener("click", this.stopBtnClick);
        this.add_btn.addEventListener("click", this.addBtnClick);
    }

    addBtnClick = e => {
        const ADD_TEXT = this.add_input.value;
        if (ADD_TEXT == "") {
            alert("추가할 이름을 입력해주세요");
            return;
        }
        this.add_input.value = "";
        this.makeTmp(ADD_TEXT);
    }

    stopBtnClick = e => {
        const TEXT = this.stop_btn.innerHTML;
        if (TEXT == "정지버튼") {
            clearInterval(this.timer);
            this.stopTimeout(1000 / 10);
            this.stop_btn.innerHTML = "기다리세요";
        } else if (TEXT == "다시뽑기") {
            this.startInterval();
            this.item_list[this.idx].classList.remove("fix");
            this.item_list[this.idx].classList.add("on");
            this.stop_btn.innerHTML = "정지버튼";
        }
    }

    stopTimeout(time) {
        if (time <= 1000) {
            setTimeout(() => {
                this.move();
                this.stopTimeout(time + 200);
            }, time);
        } else {
            this.selectedItem();
        }
    }

    selectedItem() {
        log(this.select_idx);
        const SELECT_ITEM = this.item_list[this.idx];
        const DEFAULT = document.querySelector(".hide");
        SELECT_ITEM.classList.remove("on");
        SELECT_ITEM.classList.add("fix");
        this.stop_btn.innerHTML = "다시뽑기";
        // log(SELECT_ITEM);target.getBoundingClientRect();
        const CLI = SELECT_ITEM.getBoundingClientRect();
        const DCLI = DEFAULT.getBoundingClientRect();
        log(CLI);

        const {
            left,
            top,
            width,
            height
        } = CLI;

        SELECT_ITEM.style.position = "fixed";
        SELECT_ITEM.style.left = left + "px";
        SELECT_ITEM.style.top = top + "px";
        SELECT_ITEM.style.width = width + "px";
        SELECT_ITEM.style.height = height + "px";
        setTimeout(() => {
            SELECT_ITEM.style.left = DCLI.left + "px";
            SELECT_ITEM.style.top = DCLI.top + "px";
            setTimeout(() => {
                DEFAULT.remove();
                SELECT_ITEM.style.position = "relative";
                SELECT_ITEM.style.left = 0 + "px";
                SELECT_ITEM.style.top = 0 + "px";
                this.selected_box.appendChild(SELECT_ITEM);
                let li = document.createElement("li");
                li.classList.add("hide");
                this.selected_box.appendChild(li);
            }, 500);
        }, 1);
        this.select_idx++;
        this.item_list.splice(this.idx, 1);
        this.idx = 0;
    }

    makeUser() {
        this.nameList.forEach((x, i) => {
            this.makeTmp(x, i);
        });
        this.startInterval();
    }

    makeTmp(x, i = null) {
        const LI = document.createElement("li");
        LI.classList.add("item");
        if (i == 0) LI.classList.add("on");
        LI.innerHTML = x;
        this.item_box.appendChild(LI);
        this.item_list.push(LI);
    }

    startInterval() {
        this.timer = setInterval(this.move, 1000 / 10);
    }

    move = e => {
        this.item_list[this.idx].classList.remove("on");
        this.idx++;
        if (this.idx == this.item_list.length) this.idx = 0;
        this.item_list[this.idx].classList.add("on");
    }
}