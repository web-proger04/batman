const swiper = new Swiper('.batman-slider', {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.batman-slider__arrow',
  },
  breakpoints: {
  	320: {
  		slidesPerView: 1,
  	},
  	768: {
  		slidesPerView: 2,
  	}
  }
});


let headerBody = document.querySelector('.header__body');
let headerBurger = document.querySelector('.header__burger');
let headerMenuClose = document.querySelector('.header__menu-close')

headerBurger.addEventListener('click', () => {
	headerBody.style.display = 'flex';
})

headerMenuClose.addEventListener('click', () => {
	headerBody.style.display = 'none';
})


const modalWindow = document.querySelector('.modal');
const buttonModal = document.querySelector('.batman__button-play');

buttonModal.addEventListener('click', (e) => {
	modalWindow.classList.add('active');
})

modalWindow.addEventListener('click', (e) => {
	const isModal = e.target.closest('.modal__inner');

	if (!isModal) {
	   modalWindow.classList.remove('active');
	}
});


console.log(buttonModal);