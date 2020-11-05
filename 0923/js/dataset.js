const log = console.log;
window.addEventListener('load', () => {
    const ul = document.querySelector("#list");

    ul.addEventListener("click", (e) => {
        let idx = e.target.dataset.idx;
        log(idx);
    });
});