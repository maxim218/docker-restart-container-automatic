"use strict";

const express = require("express");
const app = express();
const port = 5000;
app.listen(port);
console.log("Port: " + port);

app.get("/", function(request, response) {
    response.end(JSON.stringify({
        result: "OK",
        rnd: Math.random(),
    }));
});

app.get("/kill", function(request, response) {
    setTimeout(function() {
        throw new Error("Generate the error");
    });
});
