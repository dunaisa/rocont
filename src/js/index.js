import '../scss/style.scss';

const aboutContainer = document.querySelector('.about');
const slider = document.querySelector('.slider__wrapper');
const btnNext = document.querySelector('.slider__btn-next');
const btnPrev = document.querySelector('.slider__btn-prev');
const slides = document.querySelectorAll('.slider__slide');



function updateSliderMargin() {

  const containerRect = aboutContainer.getBoundingClientRect();
  const containerRight = containerRect.right;

  const pageWidth = window.innerWidth;
  const margin = pageWidth - containerRight;

  slider.style.marginRight = `-${margin}px`;
}

window.addEventListener('resize', updateSliderMargin);
window.addEventListener('load', updateSliderMargin);

let currentIndex = 0;
  const slideWidth = slides[0].offsetWidth; // Ширина одного слайда
  
  // Прокрутка к слайду
  const goToSlide = (index) => {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    
    currentIndex = index;
    slider.scrollTo({
      left: index * (slideWidth - slideWidth * 0.2), // Учитываем перекрытие
      behavior: 'smooth'
    });
  };
  
  // Кнопка "Вперед"
  btnNext.addEventListener('click', () => goToSlide(currentIndex + 1));
  
  // Кнопка "Назад"
  btnPrev.addEventListener('click', () => goToSlide(currentIndex - 1));