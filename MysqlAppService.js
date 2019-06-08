var _ApConn = require('./ApConn.js')
var Defaultconnection = _ApConn.Defaultconnection();

var MysqlAppservice = {

    SelectTable: function(queryString, callback) {
        var mysql = require('mysql');
        //var mysql = Defaultmysql;
        // Add the credentials to access your database
        //var connection = mysql.createConnection(SqlSetting.Defaultconnection);
        var connection = mysql.createConnection(Defaultconnection);;
        //var connection = Defaultconnection;
        // connect to mysql
        connection.connect(function(err) {
            // in case of error
            if (err) {
                console.log(err.code);
                console.log(err.fatal);
            }
        });

        // Perform a query
        $query = queryString //'SELECT emp_code,emp_name FROM `premp` LIMIT 10';

        connection.query($query, function(err, rows, fields) {
            if (err) {
                console.log("An error ocurred performing the query.");
                console.log(err);
                return;
            }

            callback(rows);

            console.log("Query succesfully executed");
        });

        // Close the connection
        connection.end(function() {
            // The connection has been closed
        });
    }
}

module.exports = MysqlAppservice;