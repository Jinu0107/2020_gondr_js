const log = console.log;
const { getCovidData } = require('./Covid');
const express = require('express'); // 지금 설치한 express를 가져온다.
const http = require('http');
const path = require('path');
const { query: Q } = require("./DB");


//익스프레스를 이용하여 웹서버 만들기
const app = express();
const server = http.createServer(app);


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//정적파일은 public폴더를 참조하도록 코드를 작성한다.
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', async (req, res) => {
    const existSql = "SELECT * FROM covid_data WHERE date = ?";
    let today = new Date().getStringDate();
    // let today = "2020-01-13";
    let existData = await Q(existSql, today);
    if (existData.length === 0) {
        getCovidData().then(async (d) => {
            if (new Date(d.base_date).getStringDate() != today) {
                d.total = null;
                res.render("main", d);
            } else {
                const sql = `INSERT INTO 
                covid_data (date, total, covid, covid_d, covid_o, freecnt, freecnt_compare, inprison, inprison_compare, death, death_compare)
                 VALUES (?,?,?,?,?,?,?,?,?,?,?)`;
                await Q(sql, Object.values(d));
            }
        });
    }
    let data_list = await Q("SELECT * FROM covid_data ORDER BY date DESC", []);
    log(data_list);
    res.render("main", {data_list});
});

server.listen(54000, () => {
    log("서버가 켜졌습니다.");
});

Date.prototype.getStringDate = function () {
    return `${this.getFullYear()}-${(this.getMonth() + 1).toString().padStart(2, "0")}-${this.getDate().toString().padStart(2, "0")}`;
}

//url => location
//uri => indicator
