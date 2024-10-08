let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');

function showSlide(index) {
    const totalSlides = slides.length;
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    const slideWidth = slides[currentSlide].clientWidth;
    document.querySelector('.slides').style.transform = `translateX(${-slideWidth * currentSlide}px)`;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}


showSlide(currentSlide);