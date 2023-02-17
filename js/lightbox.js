const slides = document.querySelector(".slider-thumb");
const wrapper = document.querySelectorAll(".swiper-slide")
const current = document.querySelector('#current');
const lightbox = document.querySelector(".swiper-lightbox")


const swiper = new Swiper('.swiper-lightbox', {
    // Optional parameters
    initialSlide: 0,
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});



wrapper.forEach((el, index) => {
    const wrap = document.createElement("img")
    wrap.src = el.firstElementChild.src
    wrap.addEventListener('click', (e) => {
        imgClick(e, index)
    })

    slides.appendChild(wrap)

    function imgClick(e, index) {
        current.src = e.target.src;

        swiper.slideTo(index + 1)
    }

    swiper.on('transitionEnd', function() {
        imgSearchByIndex(swiper.realIndex)
    });


    function imgSearchByIndex(id) {
        if (index === id) {
            current.src = el.firstElementChild.src;
        }
    }
})







current.addEventListener("click", () => {
    console.log( "click")
    lightbox.classList.toggle("show-light-box")
})





