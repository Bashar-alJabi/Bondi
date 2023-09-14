// Scroll To Top
let scrollSpan = document.querySelector(".up");
window.onscroll = function() {
    this.scrollY >= 665 ? scrollSpan.classList.add('show') : scrollSpan.classList.remove('show');
};
scrollSpan.onclick = function () {
    window.scrollTo({top: 0, behavior: 'smooth',});
};

// Nav ACtive Link
let links = document.querySelectorAll(".navbar ul li a");
links.forEach((a) => {
    a.addEventListener("click", removeLinkActive);
});
function removeLinkActive() {
    links.forEach((a) => {
        a.classList.remove("active");
        this.classList.add("active");
    });
};

// Switch Imgs
let switcherLis = document.querySelectorAll(".our-work ul li");
let divImgs = document.querySelectorAll(".our-work .row > div");
switcherLis.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageImgs);
});
// Remove Active&Rounded-pill Class From All Lis And Add To Current
function removeActive() {
    switcherLis.forEach((li) => {
        li.classList.remove("active");
        li.classList.remove("rounded-pill");
        this.classList.add("active");
        this.classList.add("rounded-pill");
    });
}
// Manage Imgs
function manageImgs() {
    divImgs.forEach((box) => {
        box.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
        el.style.display = "block";
    });
}