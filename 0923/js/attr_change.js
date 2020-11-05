const log = console.log;
window.addEventListener("load", () => {
    const img1 = document.querySelector("#img1");
    const img2 = document.querySelector("#img2");
    const btn = document.querySelector("#swapBtn");

    btn.addEventListener('click', (e) => {
        
        let temp = img1.src;
        img1.src = img2.src;
        img2.src = temp;
    });

    setInterval(() => {
        btn.click();
    }, 1000);
});