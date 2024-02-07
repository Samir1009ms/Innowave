const slides = document.querySelectorAll('.swaper');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let currentSlide = 0;
let length = slides.length - 1;

function nextSlide() {
    console.log('nextSlide');
    if (currentSlide === length) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }

    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    });
}

setInterval(() => {
    nextSlide();
}, 3000);

nextSlide();

next.addEventListener('click', () => {
    console.log('slide');
    nextSlide();

});

function prevSlide() {
    if (currentSlide === 0) {
        currentSlide = length;
    } else {
        currentSlide--;
    }

    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    });
}

prev.addEventListener('click', () => {
    prevSlide();
});


const helpSlide = document.querySelectorAll('.help_swiper');
const helpNext = document.querySelector('.help_next');
const helpPrev = document.querySelector('.help_prev');
let currentSlideHelp = 0;
let lengthHelp = helpSlide.length - 1;
function helpNextSlide() {
    if (currentSlideHelp === lengthHelp) {
        currentSlideHelp = 0;
    } else {
        currentSlideHelp++;
    }

    helpSlide.forEach((slide, index) => {
        slide.style.transform = `translateX(${102 * (index - currentSlideHelp)}%)`;
    });
}

helpNextSlide();

helpNext.addEventListener('click', () => {
    helpNextSlide();
});

function helpPrevSlide() {
    if (currentSlideHelp === 0) {
        currentSlideHelp = lengthHelp;
    } else {
        currentSlideHelp--;
    }

    helpSlide.forEach((slide, index) => {
        slide.style.transform = `translateX(${102 * (index - currentSlideHelp)}%)`;
    });
}

helpPrev.addEventListener('click', () => {
    helpPrevSlide();
});
const person = document.querySelectorAll('.person');
let currentSlidePerson = 2;
const lengthPerson = person.length;

function personNextSlide() {
    currentSlidePerson = (currentSlidePerson + 1) % lengthPerson;
    person.forEach((slide, index) => {
        const distance = (index - currentSlidePerson + lengthPerson) % lengthPerson;
        slide.style.transform = `translateX(${distance * 102}%)`;
        if (index == currentSlidePerson) {
            slide.children[0].classList.add('active');

        } else {
            slide.children[0].classList.remove('active');
        }
    });
}

personNextSlide();
setInterval(() => {
    personNextSlide();
}, 2000);
