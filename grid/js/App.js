const log = console.log;

window.addEventListener("load", () => {
    new App();
});


class App {
    constructor() {
        this.slideIdx = 0;
        this.init();
    }

    init() {
        $(".sub").hide();

        $(".tabContent > div").eq(0).fadeIn();

        $("#tabMenu > li").on("click", (e) => {
            let idx = $(e.currentTarget).index();
            $(".tabContent > div").hide();
            $(".tabContent > div").eq(idx).fadeIn();
            $("#tabMenu > li").removeClass("on");
            $(e.currentTarget).addClass("on");
        });

        this.visualSlide();
        this.setEvent();
    }

    visualSlide() {
        $(".slider > img").css({ "left": "100%" });
        $(".slider > img").eq(0).css({ "left": 0 });
        setInterval(() => {
            $(".slider > img").eq(this.slideIdx + 1 == 3 ? 0 : this.slideIdx + 1).css({ "left": "100%" }).animate({ "left": "0" }, 800);
            $(".slider > img").eq(this.slideIdx).animate({ "left": "-100%" }, 800);
            this.slideIdx = (this.slideIdx + 1) % 3;

        }, 3000);

    }


    setEvent() {
        $("#main > li").hover((e) => {
            $(e.currentTarget).find(".sub").stop().slideDown();
        }, (e) => {
            $(e.currentTarget).find(".sub").stop().slideUp();
        });
    }
}