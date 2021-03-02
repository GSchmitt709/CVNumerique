let box = document.getElementById("boxAnim1");
function timedBox() {
    setTimeout(myTimeout, 7000) 
}
function myTimeout() {
    box.setAttribute("style", "display:block;");
}