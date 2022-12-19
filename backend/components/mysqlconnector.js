var mysql = require('mysql');

function Conectar() {
    var MyConn = mysql.createConnection({
        host: "localhost",
        port: "3306",
        user: "root",
        password: "",
        database: "pruebas"
    })
    console.log("user from env", process.env.user)
    return MyConn;
}

exports.Consulta = () => {
    MyConn = Conectar();
    result = MyConn.query("select * from `users`; ", function(err, result, fields){
        if (err) throw err.sqlMessage;
        console.log("result from query", result);
    });
    return result;
}
