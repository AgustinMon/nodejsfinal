const express = require('express');
const app = express();
const cors = require("cors");

app.get('/', (req, res) => {
    res.send("GET Request Called")
})

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.get("/getdata", (req, res) => {
    res.json("Hello");
});

app.listen(8080, console.log("servidor running at port 8080"));


