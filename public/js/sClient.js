function makeList(data) {
    if(data == "") return false;
    return words.filter((ele)=>{
        if(ele.toLowerCase().startsWith(data)) return ele;
    })
}

function results(value) {
    const val = value.toLowerCase().trim();
    const res = document.getElementById("result");
    res.innerHTML = '';
    let resLis = [];
    resLis = makeList(val);
    let list = '';
    if(resLis && resLis.length != 0) {
        for(i=0; i<resLis.length; i++) {
            list += '<li>' + resLis[i] + '</li>';
        }
        res.innerHTML = '<ul>' + list + '</ul>'
    }
}
