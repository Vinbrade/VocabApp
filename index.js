const express = require("express");
const data = require("./getData");
const app = express();
const path = require("path");

app.listen(3000);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));

app.get('/:difficulty', (req, res) => {
    const difficulty = req.params.difficulty;
    res.render("showSets",{difficulty, data});
})

app.get('*', (req, res) => {
    res.render("home");
})
