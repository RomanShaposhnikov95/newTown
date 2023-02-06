// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 4,
//     spaceBetween: 30,
//     centeredSlides: true,
//     pagination: false,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });



// var swiper = new Swiper(".swiper-container",
//     {
//         //centeredSlides: "true",
//         slidesPerView: "auto",
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev'
//         },
//         pagination: false
//     }
// );

var swiper = new Swiper(
    ".swiper-container",
    {
        //centeredSlides: "true",
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

