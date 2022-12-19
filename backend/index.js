var db = require ('./components/mysqlconnector');

const express = require('express');
const cors = require("cors");

const app = express();

app.get('/', (req, res) => {
    res.send("GET Request Called")
})

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept",
    );
    next();
});

app.use(express.json());

app.get("/getdata", (req, res) => {
    res.json({saludo : "Hello"});
    res.end();
});

app.get("/mysql", (req, res) => {
    resultados = db.Consulta();
    //res.json(resultados);
    console.log("resultados", res);
    res.end();
});

app.post("/formulario", (req, res) => {
    console.log("data from formulario: ", req.body);
    res.json({respuesta : "datos recibidos"});
    res.end();
})

app.listen(8080, console.log("servidor running at port: 8080"));


