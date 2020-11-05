
class ClassApp{
    constructor(name){
        this.name = name;
    }

    introduce() {
        log(`안녕하세요 제 이름은 ${this.name} 입니다.`);
    }


}

window.addEventListener('load' , ()=>{
    // let app = new ClassApp("안진우");
    // app.introduce();

    // let rect = new Rectangle(200 , 40);
    // log(rect.myArea);
    // log(rect.name);
    // rect.name = "변경";
    // log(rect.name);

    const p1 = new Point(10 , 20);
    const p2 = new Point(20 , 30);
    p1.print();
    p2.print();
    log(Point.distance(p1 , p2));
}); 