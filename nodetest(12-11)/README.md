

# DB.js

``` js

const mysql = require('mysql');

const connectionInfo = {
    user: '???',
    password: '???',
    host: '???.asuscomm.com',
    database: '???'
};

const con = mysql.createConnection(connectionInfo);

module.exports.con = con;


```