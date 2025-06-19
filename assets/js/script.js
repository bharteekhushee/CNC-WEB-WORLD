const navbtn = document.querySelector('#nav-menu');
const popupMenu = document.querySelector('#popup-menu');
const closeBtn = document.querySelector('#close');

// navbtn.addEventListener('click',()=>{
//     popupMenu.style.opacity='1';
//     popupMenu.style.transform='translateX(0%)';
//     popupMenu.style.visibility='visible';
// })

// closeBtn.addEventListener('click',()=>{
//     popupMenu.style.opacity='0';
//     popupMenu.style.transform='translateX(100%)';
//     popupMenu.style.visibility='hidden';
// })

navbtn.addEventListener('click', () => {
    popupMenu.classList.add('active');
})

closeBtn.addEventListener('click', () => {
    popupMenu.classList.remove('active');
})

// banner 
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
    });
    slides[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

// // Optional: Auto-slide
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 2000);
window.addEventListener("DOMContentLoaded", () => {
    showSlide(currentSlide);
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});
var swiper = new Swiper(".studentReviewSwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});















