

var splide = new Splide( '.splide', {
	type   : 'loop',
	perPage: 3,
	perMove: 1,
	speed: 400,
	autoplay: true,
	interval: 3000,
	speed: 1500
} );

splide.mount();

var awards = new Splide('.awards', {
	type: 'loop',
	perPage: 3,
	perMove: 1,
	focus: 'center',
	gap: 30,
	autoplay: true,
	interval: 3000,
	speed: 1500,

	breakpoints: {
    1440: {  
      perPage: 1,
      focus: 'center',
	  padding: "25%"

    },
    768: {  // мобилка
      perPage: 1,
      focus: 'center',
	  padding: "20%"
    },
}
}).mount();

// обновляем классы сразу при начале движения
awards.on('move', function (newIndex) {
  const slides = document.querySelectorAll('.awards .splide__slide');
  slides.forEach(slide =>
    slide.classList.remove('is-prev', 'is-next', 'is-center')
  );

  const total = awards.Components.Slides.getLength();
  const getSlide = i =>
    awards.Components.Slides.getAt((i + total) % total);

  const prevSlide = getSlide(newIndex - 1);
  const nextSlide = getSlide(newIndex + 1);
  const currentSlide = getSlide(newIndex);

  if (prevSlide) prevSlide.slide.classList.add('is-prev');
  if (nextSlide) nextSlide.slide.classList.add('is-next');
  if (currentSlide) currentSlide.slide.classList.add('is-center');
});

