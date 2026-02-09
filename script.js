function clearscreen() {
    document.getElementById("ketqua").value = "";
}

function display(value){
    document.getElementById("ketqua").value += value;
}
function calculate() {

var p = document.getElementById("ketqua").value;

var q = eval(p);

document.getElementById("ketqua").value = q;

}