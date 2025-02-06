const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showNextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

setInterval(showNextSlide, 5000); // Change slide every 5 seconds

const testimonials = document.querySelectorAll('.testimonial');
let currentIndex = 0;

function showNextTestimonial() {
  testimonials[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % testimonials.length;
  testimonials[currentIndex].classList.add('active');
}

setInterval(showNextTestimonial, 3000); // Change every 3 seconds