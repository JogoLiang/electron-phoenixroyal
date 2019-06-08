// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

//var mysql = require(DefaultSqlType);
/*var Defaultconnection = {
    host: 'localhost',
    user: 'PhoenixRoyal',
    password: 'P@ssword',
    database: 'db_phoenixroyal',
    insecureAuth: true
};*/
//var SqlSetting = require('./ApConn')
var _Appservice = require('./MysqlAppservice.js')

function el(selector) {
    return document.getElementById(selector);
}

el('action-btn').addEventListener('click', function() {
    CheckPassWord(function(rows) {
        var Msg = ''
        if (rows.length > 0) {
            Msg = '登入成功'
        } else {
            Msg = '登入失敗，請輸入真正的帳號密碼'
        }
        document.getElementById('DisplayMsg').innerText = Msg
    });

}, false);

function CheckPassWord(callback) {
    var _Acc = document.getElementById('input_Account').value;
    var _Passwrod = document.getElementById('input_Password').value;
    _Appservice.SelectTable('SELECT emp_code,emp_name FROM `premp` where emp_code = \'' + _Acc + '\' and EMP_PASSWORD = \'' + _Passwrod + '\'', callback);
}


function getFirstTenRows(callback) {
    _Appservice.SelectTable('SELECT emp_code,emp_name FROM `premp` LIMIT 10', callback);
}