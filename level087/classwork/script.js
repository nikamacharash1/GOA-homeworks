document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    function moveSlide(step) {
        currentSlide += step;
        if (currentSlide < 0) {
            currentSlide = totalSlides - 1;
        }
        else if (currentSlide >= totalSlides) {
            currentSlide = 0;
        }
        updateSlider();
    }
    function updateSlider() {
        const slider = document.querySelector('.slider');
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    document.querySelector('.prev').addEventListener('click', function() {
        moveSlide(-1);  
    });
    document.querySelector('.next').addEventListener('click', function() {
        moveSlide(1);   
    });
});
