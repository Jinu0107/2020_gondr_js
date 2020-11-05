//모듈을 지원
//require 이게 모듈을 가져오는 명령어
//require 안에 들어갈 때 그냥 패키지 이름만 (http)
//=>노드의 기본 패키지 에서 찾아
//없다면 node_modules 
//안에 들어가는 ./http 이런 식으로 되어 있으면
// 현재 실행되는 파일과 같은 폴더에 있는지
const express = require('express');
const http = require("http");
const log = console.log;
const path = require("path");

//express App 
const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const server = http.createServer(app);

app.get("/main", (req, res) => {
    res.render('main' , {'msg' : 'Hello node express' , 'name' : '안진우'})
});

app.get('/main/aab' , (req , res) =>{

});

server.listen(52000, () => {
    log("서버가 52000 번에서 실행 됩니다.");
});