const express = require('express');
const http = require('http');
const path = require('path');
const { pool } = require('./DB/DB');
const { ss } = require('./DB/Credential');
const log = console.log;
const app = new express();
const server = http.createServer(app);
const bodyParser = require('body-parser');
const session = require('express-session');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: ss
}));

app.get('/', (req, res) => {
    res.render('main');
});

app.post('/api/register', async (req, res) => {
    let resutl = await pool.query("SELECT * FROM users WHERE email = ? ", [req.body.email]);
    if (resutl[0].length === 1) {
        res.json({ msg: '중복되는 회원이 있습니다.', success: false });
    } else {
        const { email, name, password } = req.body;
        await pool.query("INSERT INTO `users`(`idx`, `name`, `password`, `email`, `level`) VALUES ( null , ? , PASSWORD(?) , ? , ? )", [name, password, email, 1]);
        res.json({ msg: "성공적으로 회원가입 됐습니다.", success: true });
    }
});

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    let user = await pool.query("SELECT * FROM users WHERE email = ? AND password = PASSWORD(?)", [email, password]);
    if (user[0].length === 0) {
        res.json({ msg: '로그인 실패 , 아이디 또는 비밀번호 불일치', success: false });
    } else {
        //로그인 성공시
        res.json({ msg: "로그인 성공", success: true });
    }
});

server.listen(54000, () => {
    console.log("서버가 54000포트에서 구동중입니다.");
});