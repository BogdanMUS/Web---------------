$(document).ready(function () {
    $(".header__burger").click(function (event) {
        $(".header__burger,.header__menu").toggleClass("active");
        $("body").toggleClass("lock");
    });
});

$(document).ready(function () {
    $(".button_stoim").click(function (event) {
        $(".button_stoim,.menu_vopros").toggleClass("active");
        $("body").toggleClass("lock");
    });
});

$(document).ready(function () {
    $(".button_stoim1").click(function (event) {
        $(".button_stoim1,.menu_vopros1").toggleClass("active");
        $("body").toggleClass("lock");
    });
});

$(document).ready(function () {
    $(".button_stoim2").click(function (event) {
        $(".button_stoim2,.menu_vopros2").toggleClass("active");
        $("body").toggleClass("lock");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const slider = new ChiefSlider(".slider", {
        loop: true,
        autoplay: false,
        interval: 1000,
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
