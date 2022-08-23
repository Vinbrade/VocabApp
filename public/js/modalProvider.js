function sendData(ele) {

  const indexList = ele.value.split(",");
  document.querySelectorAll(".text-data").forEach((ele) => {
    ele.remove();
  }); // clearing the modal
  document.querySelector(".modal-head").textContent = ""; // ''
  document.querySelector(".spinner-border").style.display = "block"; // loading the spinner

  indexSetter(ele);
  dataGetter(indexList);
}

async function dataGetter(indexList){
  const wordIndex = parseInt(indexList[1]);
  let res;
  if (indexList[0] == 0) res = await axios.get("/json/easy.json");
  else if (indexList[0] == 1) res = await axios.get("/json/medium.json");
  else if (indexList[0] == 2) res = await axios.get("/json/advanced.json");
  else if (indexList[0] == 3) res = await axios.get("/json/ets_essential.json");
  else if (indexList[0] == 4) res = await axios.get("/json/ets_advanced.json");
  enterData(res.data, wordIndex);
}

const enterData = (data, index) => {
  const wordObj = data[index];
  document.querySelector(".spinner-border").style.display = "none"; // removing the spinner
  document.querySelector(".modal-head").textContent = wordObj.word;
  parentMaker("def", "Definitions:");
  for (let def of wordObj.meaning.definition) {
    eleMaker("def", def);
  }
  const syns = wordObj.meaning.synonyms;
  if (syns != "") {
    parentMaker("syn", "Synonyms:");
    for (let syn of syns) {
      eleMaker("syn", syn);
    }
  }
  const exmls = wordObj.meaning.extra_info;
  if (exmls != "") {
    parentMaker("exl", "Examples:");
    for (let exml of exmls) {
      eleMaker("exl", exml);
    }
  }
  const mem = wordObj.mnemonic;
  if (mem != "") {
    parentMaker("mem", "Memory aid:");
    eleMaker("mem", mem);
  }
};

const parentMaker = (type, title) => {
  const p = document.createElement("p");
  p.setAttribute("class", "sub-title text-data");
  p.textContent = title;
  const ul = document.createElement("ul");
  ul.setAttribute("class", `content ${type}-text text-data`);
  let point
  switch (type) {
    case "def":
      point = document.querySelector(".data-col-1");
      break;
    case "syn":
      point = document.querySelector(".data-col-2");
      break;
    case "exl":
      point = document.querySelector(".data-col-3");
      break;
    case "mem":
        point = document.querySelector(".data-col-4");
        break;
  }
  point.appendChild(p);
  point.appendChild(ul);
};

const eleMaker = (type, data) => {
  const li = document.createElement("li");
  li.setAttribute("class", `word--text ${type}-text`);
  li.textContent = data;
  document.querySelector(`.${type}-text`).appendChild(li);
};
