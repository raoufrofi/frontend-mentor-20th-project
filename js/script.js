
let para = document.getElementsByClassName("para");
let unorder = document.querySelector(".unorder");
let img = unorder.getElementsByTagName("img");

r = 0;
function openPara(e) {
    para[e].classList.toggle("hidden");
    img[e].classList.toggle("rotate-180");

}