new Swiper(".stocks-slider", {
    slidesPerView: 1,
    spaceBetween: 7,
    loop: true,
    pagination: {
        el: ".stocks-slider__pagination",
        clickable: 0
    },
    navigation: {
        nextEl: ".stocks-slider__arrow--next",
        prevEl: ".stocks-slider__arrow--prev"
    },
    breakpoints: {
        769: {
            slidesPerView: 4,
            spaceBetween: 22,
             
        }
    }
})

const btns = document.querySelectorAll('.hero__btn');

btns.forEach(btn => {
    btn.addEventListener('click', ()=>{
        btns.forEach(el => el.classList.remove('active'));
        btn.classList.add('active');
    });
});