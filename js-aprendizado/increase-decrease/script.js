let num = 0;
const idnum = document.getElementById("num");

function increase(){
    num++;
    idnum.innerHTML = num;
}

function decrease(){
    num--;
    idnum.innerHTML = num;
}

function reset(){
    num = 0;
    idnum.innerHTML = num;
}