var slide = document.querySelector(".slide");
var btnkiri = document.querySelector(".kiri");
var btnkanan = document.querySelector(".kanan");
var img = document.querySelectorAll(".img");
var des = document.querySelector("#deskripsi")
const ukuran = img[0].clientWidth;
let hitung = 1;

slide.style.left = "0px";

function next() {
    slide.style.transition = "all 1s ease-in-out"
    if (hitung >= 3) {
        hitung = 0;
    };
    slide.style.left = "-" + ukuran * hitung + "px";
    des.innerHTML = img[hitung].attributes.item(2).nodeValue;
    hitung++;
};
btnkanan.addEventListener("click", next);

btnkiri.addEventListener("click", () => {
    slide.style.transition = "all 1s ease-in-out"
    if (hitung <= 0) {
        hitung = 3;
    };
    slide.style.left = "-" + ukuran * (hitung - 1) + "px";
    des.innerHTML = img[hitung - 1].attributes.item(2).nodeValue;
    hitung--;
});

