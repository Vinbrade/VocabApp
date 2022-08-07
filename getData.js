const fs = require("fs");
const easyData = JSON.parse(fs.readFileSync("public/assets/easy.json", "utf-8"));
const mediumData = JSON.parse(fs.readFileSync("public/assets/medium.json", "utf-8"));
const advancedData = JSON.parse(fs.readFileSync("public/assets/advanced.json", "utf-8"));


module.exports = [easyData, mediumData, advancedData];