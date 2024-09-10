function toggleNavbar() {
    document.querySelector(".navbar").classList.toggle("active");
    document.querySelector(".nav-links").classList.toggle("active");
}

let index = 0;

function showSlide(i) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    if (i >= totalSlides) index = 0;
    else if (i < 0) index = totalSlides - 1;
    else index = i;
    slides.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
    showSlide(index + 1);
}

function prevSlide() {
    showSlide(index - 1);
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);
