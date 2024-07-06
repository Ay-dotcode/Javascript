let scrollContainer = document.querySelector("#gallery");
let nextBtn = document.getElementById("nextBtn");
let prevBtn = document.getElementById("prevBtn");
let gallery = document.getElementById("gallery");


scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

nextBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft += gallery.offsetWidth + 20;
});

prevBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft -= gallery.offsetWidth + 20;
});