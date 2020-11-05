const log = console.log;
window.addEventListener('load' , ()=>{
    let d = new Dog("재성이");
    d.speak();
});


class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        log(`${this.name} 이 소리를 냅니다.`);
    }
}




class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    speak() {
        log(`${this.name}가 짖습니다.`);
    }
}