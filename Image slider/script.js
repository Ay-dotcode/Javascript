let nextBtn = document.getElementById("nextBtn");
let prevBtn = document.getElementById("prevBtn");
let gallery = document.getElementById("gallery");


gallery.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    gallery.scrollLeft += evt.deltaY;
});

nextBtn.addEventListener("click", () => {
    gallery.style.scrollBehavior = "smooth";
    gallery.scrollLeft += gallery.offsetWidth + 20;
});

prevBtn.addEventListener("click", () => {
    gallery.style.scrollBehavior = "smooth";
    gallery.scrollLeft -= gallery.offsetWidth + 20;
});