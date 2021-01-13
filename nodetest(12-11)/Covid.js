const cheerio = require('cheerio');
const { get } = require('request');
const request = require('request');
const log = console.log;



String.prototype.toNumber = function () {
    return this.split("").filter(x => x != " " && x != ",").join("") * 1;
}

String.prototype.toDate = function (date) {
    return `${date.getFullYear()}-${this.substring(1, 6).replace(".", "-")}`;
}

function getData() {
    const url = "http://ncov.mohw.go.kr/bdBoardList_Real.do";
    return new Promise((resolve, reject) => {
        request(url, (err, res, body) => {
            const $ = cheerio.load(body);
            let total = $(".ca_value").eq(0).html().toNumber();
            let covid = $(".inner_value").eq(0).html().toNumber();
            let covid_d = $(".inner_value").eq(1).html().toNumber();
            let covid_o = $(".inner_value").eq(2).html().toNumber();
            let freecnt = $(".ca_value").eq(2).html().toNumber();
            let freecnt_compare = $(".txt_ntc").eq(0).html().toNumber();
            let inprison = $(".ca_value").eq(4).html().toNumber();
            let inprison_compare = $(".txt_ntc").eq(1).html().toNumber();
            let death = $(".ca_value").eq(6).html().toNumber();
            let death_compare = $(".txt_ntc").eq(2).html().toNumber();
            let base_date = $("#content > div > h5:nth-child(4) > span").html().toDate(new Date);
            let data = { base_date, total, covid, covid_d, covid_o, freecnt, freecnt_compare, inprison, inprison_compare, death, death_compare };
            resolve(data);
        });
    });
}


module.exports.getCovidData = getData;




// let html = `
//     <div class="abc">ㅁㅇㅁㄴㅇ</div>
//     <div class="gondr">sss</div>
//     <div class="cccc">qwe</div>
// `;

// let $ = cheerio.load(html);

// const msg = $(".gondr").html();

// console.log(msg);

// document => 
// 문서 객체 -> HTML문서를 해석해서 DOM 형태로 트리구조화 시켜놓은것을 담고 있는 객체
//document

// 노드는 브라우저라는 플랫폼을 벗어나서 
// 컴퓨터 어디든 JS실행시킬 수 있는 환경을 만들어준거.
// 정나영 1000원
// npm === gradle === packgist(composer) === pip
// 해오지않으면 1000원씩만 
// 김가현 1000원