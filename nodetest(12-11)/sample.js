function getCovidData() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Hello World");
        }, 3000);
    });

}

let data = getCovidData();
data.then((data) => {
    console.log(data);
});



