const list = document.querySelectorAll('.menu-item');
function activeLink() {
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) => item.addEventListener('click', activeLink));




document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide-carousel', {
      type: 'loop',        // Loop the carousel
      perPage: 4,          // Number of slides visible
      perMove: 1,          // Number of slides to move per interaction
      gap: '1rem',         // Gap between slides
      arrows: true,        // Navigation arrows
      pagination: false,   // Disable pagination dots
      breakpoints: {       // Responsive settings
        1024: { perPage: 2 },
        768: { perPage: 1 },
      },
    }).mount();
  });