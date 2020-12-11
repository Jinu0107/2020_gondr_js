const log = console.log;


const cheerio = require('cheerio');
const request = require("request");

const url = "http://ncov.mohw.go.kr/bdBoardList_Real.do";

request(url, (err, res, body) => {
    const $ = cheerio.load(body);
    let sick_total = $("#content > div > div.caseTable > div:nth-child(1) > ul > li:nth-child(1) > dl > dd").html();
    let sick_subtotal = $("#content > div > div.caseTable > div:nth-child(1) > ul > li:nth-child(2) > dl > dd > ul > li:nth-child(1) > p").html();
    let sick_domestic = $('#content > div > div.caseTable > div:nth-child(1) > ul > li:nth-child(2) > dl > dd > ul > li:nth-child(2) > p').html();
    let sick_overseas = $("#content > div > div.caseTable > div:nth-child(1) > ul > li:nth-child(2) > dl > dd > ul > li:nth-child(3) > p").html();
    let release_total = $('#content > div > div.caseTable > div:nth-child(2) > ul > li:nth-child(1) > dl > dd').html();
    let release_subtotal = $('#content > div > div.caseTable > div:nth-child(2) > ul > li:nth-child(2) > dl > dd > span').html();
    let isolation_total = $('#content > div > div.caseTable > div:nth-child(3) > ul > li:nth-child(1) > dl > dd').html();
    let isolation_subtotal = $("#content > div > div.caseTable > div:nth-child(3) > ul > li:nth-child(2) > dl > dd > span").html();
    let die_total = $('#content > div > div.caseTable > div:nth-child(4) > ul > li:nth-child(1) > dl > dd').html();
    let die_subtotal = $('#content > div > div.caseTable > div:nth-child(4) > ul > li:nth-child(2) > dl > dd > span').html();
    log("확진환자 누적 : " + sick_total);
    log("확진환자 소계 : " + sick_subtotal);
    log("확진환자 국내발생 : " + sick_domestic);
    log("확진환자 해외유입 : " + sick_overseas);
    log("격리해제 누적 : " + release_total);
    log("격리해제 전일대비 : " + release_subtotal);
    log("격리중 누적 : " + isolation_total);
    log("격리중 전일대비 : " + isolation_subtotal);
    log("사망 누적 : " + die_total);
    log("사망 전일대비 : " + die_total);

});

// let html = `
//     <div class="abc">adsadas</div>
//     <div class="adsad">ㅇㅁㄴㅇㅇㅁㄴ</div>
//     <div class="dsadasasdsa">집</div>
// `

// let $ = cheerio.load(html);

// const msg = $(".abc").html();

// log(msg);


//document =>
// 문서 객체 -> HTML문서를 해석해서 DOM 형태로 트리구조화 시켜놓은 것을 담고 있는 객체


//노드는 브라우저라는 플랫폼을 벗어나서
// 컴퓨터 어디든 JS실행시킬 수 있는 환경을 만들어준거.