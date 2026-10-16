const http = require("http");
const express = require("express");
const rateLimit = require("express-rate-limit");

const app = express();

const limitter = rateLimit({
    windowMs: 60 * 1000,
    limit: 5,
});

// const server = http.createServer( (req,res)=>{
//     if(req.url == "/"){
//     res.write("Hello Indore!! How 's Navaratra Going On !!!");
//     res.end();

//     }
//     if(req.url == "/Home"){
//         res.write("This is the HomePage");
//         res.end();

//     }

// })

const server = app.get("/", (req, res) => {
    res.send("Hi This is from Express frame work");
});

app.get("/About", (req, res) => {
    res.send("This is from About Page");
});

app.get("/api/test", limitter, (req, res) => {
    res.send({ message: "Request Successful !!" });
});

const PORT = 3030;

server.listen(PORT, () => {
    console.log("your server is running");
});
