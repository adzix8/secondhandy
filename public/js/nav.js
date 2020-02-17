const button = document.querySelector(".hamburger");
const shadow = document.querySelector(".wrapper__shadow");

button.addEventListener("click", function () {
    button.classList.toggle("hamburger--active");
    shadow.classList.toggle("navbar--clicked");
}, false);

window.onscroll = function () {navbarScroll()};

function navbarScroll() {
    let fixed = document.querySelector(".navbar");
    if (window.pageYOffset > 1) {
        fixed.classList.add("navbar-fixed");
    } else {
        fixed.classList.remove("navbar-fixed");
    }
}
