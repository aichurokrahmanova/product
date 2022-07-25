const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


const stylesheet = document.documentElement.style;

const toggle = document.querySelector(".switch__input[data-theme-toggle]");
toggle.addEventListener("click", () => {

    const color1 = getComputedStyle(document.documentElement).getPropertyValue(
        "--color-1"
    );
    const color2 = getComputedStyle(document.documentElement).getPropertyValue(
        "--color-2"
    );

    // switching the css variables
    stylesheet.setProperty("--color-1", color2);
    stylesheet.setProperty("--color-2", color1);
});
