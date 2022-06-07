document.addEventListener("DOMContentLoaded", function () {
    const slider = new ChiefSlider(".slider", {
        loop: true,
        autoplay: false,
        interval: 1000,
    });
});

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
    slidesPerView: 1,
    slidesPerGroup: 1,

    // And if we need scrollbar
});
