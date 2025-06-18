const botaoModoEscuro = document.getElementById('dark-mode-banner');
const corpo = document.body;

if (localStorage.getItem('modoEscuro') === 'true') {
  corpo.classList.add('dark-mode');
}

botaoModoEscuro.addEventListener('click', () => {
  corpo.classList.toggle('dark-mode');
  const estaEscuro = corpo.classList.contains('dark-mode');
  localStorage.setItem('modoEscuro', estaEscuro);
});

let slideIndex = 0;
let intervalId = null;
const slides = document.querySelectorAll('.banner-slide');

function mostrarSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  mostrarSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  mostrarSlide(slideIndex);
}

function iniciarCarousel() {
  intervalId = setInterval(nextSlide, 4000);
}

function pauseCarousel() {
  clearInterval(intervalId);
  setTimeout(() => {
    iniciarCarousel();
  }, 10000);
}

document.addEventListener('DOMContentLoaded', () => {
  mostrarSlide(slideIndex);
  iniciarCarousel();
});

const botaoProximo = document.getElementById('next-slide');
const botaoAnterior = document.getElementById('prev-slide');

if (botaoProximo && botaoAnterior) {
  botaoProximo.addEventListener('click', () => {
    nextSlide();
    pauseCarousel();
  });

  botaoAnterior.addEventListener('click', () => {
    prevSlide();
    pauseCarousel();
  });
}
