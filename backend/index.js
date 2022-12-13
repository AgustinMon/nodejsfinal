const express = require('express');
const app = express();
const cors= require("cors");

app.get("/getdata", function (req, res) {
    res.send("{ respuesta : hola desde el server")
    //return ({ respuesta : "hola desde el server"})
})

app.listen(8080, console.log("servidor running at port 8080"));

