$(document).ready(function () {
    $(".header__burger").click(function (event) {
        $(".header__burger,.header__menu").toggleClass("active");
    });
});

const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        disabledClass: ".swiper-button-disabled",
        clickable: true,
    },

    spaceBetween: 70,
    slidesPerView: 3,
    slidesPerGroup: 3,

    // And if we need scrollbar
});
