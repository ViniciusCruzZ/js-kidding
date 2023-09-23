const btnShow = document.querySelector(".btnShow");
const popUp = document.querySelector(".popUp");
const phCircle = document.querySelector( ".ph-x-circle");

btnShow.addEventListener("click", function() {
    toggleVisibility(popUp);
    toggleVisibility(btnShow);
    toggleBackgroundColor("#00000082");
});

phCircle.addEventListener("click", function() {
    toggleVisibility(popUp);
    toggleVisibility(btnShow);
    toggleBackgroundColor("#ffffff");
});

function toggleVisibility(element) {
    element.classList.toggle("hidden");
}

function toggleBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}