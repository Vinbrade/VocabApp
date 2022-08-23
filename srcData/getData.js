const fs = require("fs");
const easyData = JSON.parse(fs.readFileSync("views/assets/easy.json", "utf-8"));
const mediumData = JSON.parse(fs.readFileSync("views/assets/medium.json", "utf-8"));
const advancedData = JSON.parse(fs.readFileSync("views/assets/advanced.json", "utf-8"));
const etsEssentialData = JSON.parse(fs.readFileSync("views/assets/ets_essential.json", "utf-8"));
const etsAdvancedData = JSON.parse(fs.readFileSync("views/assets/ets_advanced.json", "utf-8"));
const data = [easyData, mediumData, advancedData, etsEssentialData, etsAdvancedData];

module.exports = data;
