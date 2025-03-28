const swiperScript = document.createElement("script");
swiperScript.src = "https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js";
document.head.appendChild(swiperScript);

document.getElementById("quote-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your quote request has been submitted! We'll get back to you soon.");
});

document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiper-container", {
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
});
