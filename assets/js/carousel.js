// assets/js/carousel.js

document.addEventListener('DOMContentLoaded', () => {
    // Carousel initialization function
    function initializeCarousel() {
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;
        
        // Only run if carousel exists on page
        if (slides.length > 0) {
            const prev = document.querySelector('.prev');
            const next = document.querySelector('.next');

            function showSlide(index) {
                slides.forEach((slide, i) => {
                    slide.classList.remove('active');
                    if (i === index) {
                        slide.classList.add('active');
                    }
                });
            }

            // Initialize first slide
            showSlide(currentSlide);

            // Event listeners with null checks
            if (prev) {
                prev.addEventListener('click', () => {
                    currentSlide = (currentSlide === 0) ? totalSlides - 1 : currentSlide - 1;
                    showSlide(currentSlide);
                });
            }

            if (next) {
                next.addEventListener('click', () => {
                    currentSlide = (currentSlide === totalSlides - 1) ? 0 : currentSlide + 1;
                    showSlide(currentSlide);
                });
            }
        }
    }

    // Initialize carousel only when needed
    const carouselContainer = document.querySelector('.carousel');
    if (carouselContainer) {
        initializeCarousel();
    }
});