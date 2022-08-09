
function clearClass(){
  document.querySelectorAll(".off-btn").forEach(function(item){
    if(item.classList.contains("off-sel")) item.classList.remove("off-sel");
  });

  document.querySelectorAll("#card-options").forEach(function(card){
    if(card.classList.contains("check")) card.classList.remove("check");
    else card.style.display = "";
  })


}

function fil(ele) {
  clearClass();
  const limits = ele.value.split(",");
  ele.classList.add("off-sel");
  const cards = document.querySelectorAll("#card-options");

  const si = parseInt(limits[0])-1;
  const ei = parseInt(limits[1]);

  for(let i = si; i < ei; i++){
        cards[i].classList.add("check");
  }
  document.querySelectorAll("#card-options").forEach(function(opt) {
    if(!opt.classList.contains("check")) opt.style.display = "none";
  })
}
