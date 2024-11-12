// script.js

// Existing date-related code...

// Carousel Functionality
document.addEventListener('DOMContentLoaded', () => {
    // Date Functionality (if separate from carousel)

    // Carousel Functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    // Function to show a specific slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    // Show the first slide initially
    showSlide(currentSlide);

    // Event listener for previous arrow
    if (prev && next) { // Ensure arrows exist
        prev.addEventListener('click', () => {
            currentSlide = (currentSlide === 0) ? totalSlides - 1 : currentSlide - 1;
            showSlide(currentSlide);
        });

        // Event listener for next arrow
        next.addEventListener('click', () => {
            currentSlide = (currentSlide === totalSlides - 1) ? 0 : currentSlide + 1;
            showSlide(currentSlide);
        });
    }
});
