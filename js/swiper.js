var swiper = new Swiper(
    ".swiper-container",
    {
        slidesPerView: "auto",
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        }
    }
);

