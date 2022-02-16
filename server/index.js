const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("QuickNote API!")
});

app.listen(post, () => {
    console.lof(`Express app listening at post: http://localhost:${port}/`);
});