document.addEventListener("DOMContentLoaded", function () {
    var quoteForm = document.getElementById("quote-form");

    if (quoteForm) {
        quoteForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Your quote request has been submitted! We'll get back to you soon.");
        });
    }

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
