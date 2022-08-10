let ID;
let nextCard;

const indexSetter = (idStr) => {
  ID = idStr.value.split(",");
  const lArrow = document.querySelector(".left-arrow");
  const rArrow = document.querySelector(".right-arrow");
  if (document.querySelector(".index"))
    document.querySelector(".index").remove(); // removing index
  lArrow.classList.remove("visible");
  rArrow.classList.remove("visible");
  lArrow.classList.remove("invisible");
  rArrow.classList.remove("invisible");
  lArrow.classList.add("invisible");
  rArrow.classList.add("invisible");
  if (ID[2] != "false") {
    lArrow.classList.remove("invisible");
    rArrow.classList.remove("invisible");
    lArrow.classList.add("visible");
    rArrow.classList.add("visible");
    const parent = document.querySelector(
      "#detailedInfo > div > div > div.container > div > div.col-8.d-flex.justify-content-evenly"
    );
    const p = document.createElement("p"); // creating and
    p.setAttribute("class", "index mt-4"); // setting the value of
    p.textContent = ID[2]; // the index number
    parent.insertBefore(p, parent.firstChild);

    document
      .querySelectorAll("#card-options > div > div > div > button")
      .forEach((btn, i, list) => {
        if (idStr.value == btn.value) {
          if (i == 0) {
            lArrow.classList.remove("visible");
            lArrow.classList.add("invisible");
          } else if (i === list.length - 1) {
            rArrow.classList.remove("visible");
            rArrow.classList.add("invisible");
          }
        }
      });
  }
};

const navigate = function (arrow) {
  const list = document.querySelectorAll(
    "#card-options > div > div > div > button"
  );

  let indeces = ID.map((n) => {
    return parseInt(n);
  });

  if (arrow.value == "back") {
    let worId = indeces[2] - 1;
    indeces[2] = worId;
    do {
      let worIn = indeces[1] - 1;
      indeces[1] = worIn;
    } while (checkVal(indeces, list) && indeces[1] >= 0);
  } else if (arrow.value == "next") rigthCard(indeces, list);

  sendData(nextCard);
};



const rigthCard = function (arry, list) {
  let worId = arry[2] + 1;
  arry[2] = worId;
  do {
    let worIn = arry[1] + 1;
    arry[1] = worIn;
  } while (checkVal(arry, list) && arry[1] <= 0);
};



const checkVal = function (arry, domList) {
  const strAr = arry.map((n) => {
    return n.toString();
  });

  const strrr = strAr.join(",");
  for (ele of domList) {
    if (strrr == ele.value) {
      nextCard = ele;
      return false;
    }
  }
  return true;
};
