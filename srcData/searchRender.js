const get = require("./searchSet")

const getResultSet = (value) => {
    return get.wordSet.filter((item) => {
        if(item.word.toLowerCase().startsWith(value)) return item;
    });
}
module.exports = getResultSet